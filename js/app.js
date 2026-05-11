(function () {
  const freeSection = document.querySelector("#freeSection");
  const paidSection = document.querySelector("#paidSection");
  const freeResult = document.querySelector("#freeResult");
  const paidResult = document.querySelector("#paidResult");
  const paidList = document.querySelector("#paidList");

  const memoryShuffleBags = {};
  const storagePrefix = "listen_randomizer_shuffle_";

  function publicFreeWorks() {
    return freeWorks.filter((work) => work.isPublic !== false);
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function formatRichText(value) {
    const escaped = escapeHtml(value ?? "");
    return escaped.replace(/\*\*([\s\S]*?)\*\*/g, "<strong>$1</strong>");
  }

  const defaultUnlockLabel = "点击解锁完整版 🔗";

  function normalizePaidUnlockList(raw) {
    if (!Array.isArray(raw)) return [];
    return raw
      .filter((entry) => entry && String(entry.url || "").trim())
      .map((entry) => ({
        label: String(entry.label || "").trim(),
        note: String(entry.note || "").trim(),
        url: String(entry.url || "").trim()
      }))
      .map((entry) => ({
        label: entry.label || defaultUnlockLabel,
        note: entry.note,
        url: entry.url
      }));
  }

  function globalPaidUnlockEntries() {
    const raw = typeof paidUnlockLinks !== "undefined" && Array.isArray(paidUnlockLinks) ? paidUnlockLinks : [];
    return normalizePaidUnlockList(raw);
  }

  function paidUnlockStripHtml() {
    const entries = globalPaidUnlockEntries();
    if (!entries.length) return "";
    const cards = entries
      .map((entry) => {
        const noteBlock = entry.note
          ? `<span class="unlock-cta__note">${escapeHtml(entry.note)}</span>`
          : "";
        return `<a class="unlock-cta" href="${escapeHtml(entry.url)}" target="_blank" rel="noopener noreferrer"><span class="unlock-cta__label">${escapeHtml(entry.label)}</span>${noteBlock}</a>`;
      })
      .join("");
    return `<div class="unlock-strip" aria-label="解锁入口">${cards}</div>`;
  }

  function tagList(tags) {
    if (!tags || !tags.length) return "";
    return `<div class="tags">${tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}</div>`;
  }

  function linkButton(url, label) {
    if (!url) return "";
    return `<a class="link-button" href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(label)}</a>`;
  }

  function cloudButtons(cloudLinks) {
    if (!cloudLinks || !cloudLinks.length) return "";

    const labelFallbacks = ["云盘链接", "打开云盘", "备用云盘", "其他云盘"];
    const entries = [];
    cloudLinks.forEach((link) => {
      if (!link) return;
      const url = String(link.url ?? "").trim();
      if (!url) return;
      entries.push({
        url,
        label: String(link.label ?? "").trim()
      });
    });

    if (!entries.length) return "";

    const buttons = entries
      .map((entry, index) => {
        const text = entry.label || labelFallbacks[index] || labelFallbacks[labelFallbacks.length - 1];
        return linkButton(entry.url, text);
      })
      .join("");

    return `<div class="card-actions">${buttons}</div>`;
  }

  let freeAudioTeardown = null;

  function teardownFreeAudio() {
    if (typeof freeAudioTeardown === "function") {
      freeAudioTeardown();
      freeAudioTeardown = null;
    }
  }

  function setFreeResultHtml(html) {
    teardownFreeAudio();
    freeResult.innerHTML = html;
    freeAudioTeardown = mountFreeAudioWidget(freeResult);
  }

  function freeValidAudioEntries(work) {
    const raw = Array.isArray(work.audioLinks) ? work.audioLinks : [];
    return raw
      .filter((entry) => entry && String(entry.url || "").trim())
      .map((entry) => ({
        label: String(entry.label || "").trim() || "在线播放",
        url: String(entry.url || "").trim()
      }));
  }

  function freeAudioBlockHtml(work) {
    const valid = freeValidAudioEntries(work);
    if (!valid.length) return "";
    const versionButtons = valid
      .map((entry, i) => `
        <button type="button" class="free-audio-version${i === 0 ? " is-active" : ""}" data-audio-url="${escapeHtml(entry.url)}">${escapeHtml(entry.label)}</button>
      `)
      .join("");
    const versionsWrap =
      valid.length > 1
        ? `<div class="free-audio-versions" role="tablist" aria-label="音频版本">${versionButtons}</div>`
        : "";
    return `
      <div class="free-audio-block" data-free-audio>
        <p class="free-audio-head">在线试听</p>
        ${versionsWrap}
        <audio class="free-audio-el" controls preload="metadata" src="${escapeHtml(valid[0].url)}"></audio>
        <div class="sleep-timer" data-sleep-timer>
          <span class="sleep-timer__label">定时关闭</span>
          <button type="button" class="sleep-timer__btn" data-timer="15">15分钟</button>
          <button type="button" class="sleep-timer__btn" data-timer="30">30分钟</button>
          <button type="button" class="sleep-timer__btn" data-timer="60">60分钟</button>
          <button type="button" class="sleep-timer__btn" data-timer="end">播放完关闭</button>
          <button type="button" class="sleep-timer__btn" data-timer="cancel">取消定时</button>
        </div>
        <p class="free-audio-night-msg" hidden role="status">已为你暂停播放，晚安</p>
      </div>
    `;
  }

  function mountFreeAudioWidget(container) {
    const root = container.querySelector("[data-free-audio]");
    if (!root) return null;

    const audio = root.querySelector(".free-audio-el");
    const nightMsg = root.querySelector(".free-audio-night-msg");
    const timerRoot = root.querySelector("[data-sleep-timer]");
    if (!audio || !nightMsg || !timerRoot) return null;

    const versionButtons = Array.from(root.querySelectorAll(".free-audio-version"));

    let wakeTimer = null;
    let fadeTimer = null;
    let onEnded = null;

    const resetVolume = () => {
      audio.volume = 1;
    };

    function clearWake() {
      if (wakeTimer !== null) {
        window.clearTimeout(wakeTimer);
        wakeTimer = null;
      }
    }

    function clearEnded() {
      if (onEnded) {
        audio.removeEventListener("ended", onEnded);
        onEnded = null;
      }
    }

    function clearFade() {
      if (fadeTimer !== null) {
        window.clearInterval(fadeTimer);
        fadeTimer = null;
      }
    }

    function clearAllSchedulers() {
      clearWake();
      clearEnded();
      clearFade();
    }

    function finishNight() {
      clearWake();
      clearEnded();
      clearFade();
      nightMsg.hidden = true;
      const steps = 50;
      const stepMs = 100;
      const startVol = audio.volume;
      let step = 0;
      fadeTimer = window.setInterval(() => {
        step += 1;
        audio.volume = Math.max(0, startVol * (1 - step / steps));
        if (step >= steps) {
          clearFade();
          audio.pause();
          resetVolume();
          nightMsg.hidden = false;
        }
      }, stepMs);
    }

    versionButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const url = btn.getAttribute("data-audio-url") || "";
        versionButtons.forEach((b) => b.classList.remove("is-active"));
        btn.classList.add("is-active");
        audio.src = url;
        audio.load();
      });
    });

    timerRoot.addEventListener("click", (event) => {
      const target = event.target.closest("[data-timer]");
      if (!target) return;
      const mode = target.getAttribute("data-timer");
      clearAllSchedulers();
      resetVolume();
      nightMsg.hidden = true;

      if (mode === "cancel") {
        return;
      }
      if (mode === "end") {
        onEnded = () => {
          audio.removeEventListener("ended", onEnded);
          onEnded = null;
          finishNight();
        };
        audio.addEventListener("ended", onEnded);
        return;
      }
      const minutes = Number(mode, 10);
      if (!Number.isFinite(minutes) || minutes <= 0) return;
      wakeTimer = window.setTimeout(() => {
        wakeTimer = null;
        finishNight();
      }, minutes * 60 * 1000);
    });

    return () => {
      clearAllSchedulers();
      resetVolume();
      nightMsg.hidden = true;
      audio.pause();
      audio.removeAttribute("src");
      audio.load();
    };
  }

  function freeCard(work) {
    if (!work) {
      return `<div class="empty-state"><p>这个分类暂时还没有作品，可以先换一个按钮试试。</p></div>`;
    }

    return `
      <article class="work-card work-card--free">
        <p class="card-kicker">今天抽到的是</p>
        <h3 class="work-title">${escapeHtml(work.title)}</h3>
        ${tagList(work.typeTags)}
        ${work.period ? `<p class="meta">作品时期：${escapeHtml(work.period)}</p>` : ""}
        ${work.note ? `<p class="note rich-text">${formatRichText(work.note)}</p>` : ""}
        ${freeAudioBlockHtml(work)}
        ${cloudButtons(work.cloudLinks)}
        ${work.pageLink ? `<div class="card-actions">${linkButton(work.pageLink, "发布页 / 试听页")}</div>` : ""}
      </article>
    `;
  }

  function paidCard(work, kicker = "付费作品推荐") {
    if (!work) {
      return `<div class="empty-state"><p>这个推荐分类暂时还没有作品。</p></div>`;
    }

    const included = work.includedItems && work.includedItems.length
      ? `<p class="meta">内容包含：${work.includedItems.map(escapeHtml).join(" / ")}</p>`
      : "";
    const title = [work.number, work.title].filter(Boolean).join(" ");
    const tags = [...(work.categoryTags || [])];
    const actions = [
      linkButton(work.previewLink, "试听链接"),
      linkButton(work.purchaseLink, "购买入口")
    ].filter(Boolean).join("");

    return `
      <article class="work-card work-card--paid">
        <p class="card-kicker">${escapeHtml(kicker)}</p>
        <h3 class="work-title">${escapeHtml(title)}</h3>
        ${tagList(tags)}
        ${work.duration ? `<p class="meta">时长：${escapeHtml(work.duration)}</p>` : ""}
        ${work.intro ? `<p class="note rich-text">${formatRichText(work.intro)}</p>` : ""}
        ${paidUnlockStripHtml()}
        ${work.recommendReason ? `<p class="reason rich-text">推荐理由：${formatRichText(work.recommendReason)}</p>` : ""}
        ${included}
        ${actions ? `<div class="card-actions">${actions}</div>` : ""}
      </article>
    `;
  }

  function defaultCompanionCollectionConfig() {
    return {
      title: "睡前陪伴合集",
      tagLine: "声音合集",
      body:
        "这里收录了助眠引导、抱抱安慰，以及睡前可爱小故事。\n想被哄睡、被安慰，或者睡前听一点轻松的小故事，可以跳转网易云播客收听。",
      action: { label: "去网易云播客收听", url: "" }
    };
  }

  function normalizedCompanionCollectionConfig() {
    const d = defaultCompanionCollectionConfig();
    const raw = typeof companionCollectionConfig !== "undefined" ? companionCollectionConfig : null;
    if (!raw || typeof raw !== "object") return d;
    const act = raw.action && typeof raw.action === "object" ? raw.action : {};
    return {
      title: String(raw.title ?? "").trim() || d.title,
      tagLine: String(raw.tagLine ?? "").trim() || d.tagLine,
      body: typeof raw.body === "string" ? raw.body : d.body,
      action: {
        label: String(act.label ?? "").trim() || d.action.label,
        url: String(act.url ?? "").trim()
      }
    };
  }

  function companionCollectionCardHtml() {
    const cfg = normalizedCompanionCollectionConfig();
    const url = cfg.action.url;
    const btn = url
      ? `<a class="link-button" href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(cfg.action.label)}</a>`
      : "";
    return `
      <article class="work-card companion-card">
        <p class="card-kicker">${escapeHtml(cfg.tagLine)}</p>
        <h3 class="work-title">${escapeHtml(cfg.title)}</h3>
        <p class="note rich-text">${formatRichText(cfg.body)}</p>
        ${btn ? `<div class="card-actions">${btn}</div>` : ""}
      </article>
    `;
  }

  function syncCompanionEntryButtonLabel() {
    const btn = document.querySelector("#openCompanionCollection");
    if (!btn) return;
    btn.textContent = normalizedCompanionCollectionConfig().title || defaultCompanionCollectionConfig().title;
  }

  function showCompanionCollection() {
    setFreeResultHtml(companionCollectionCardHtml());
  }

  function shuffle(items) {
    const result = items.slice();
    for (let index = result.length - 1; index > 0; index -= 1) {
      const randomIndex = Math.floor(Math.random() * (index + 1));
      [result[index], result[randomIndex]] = [result[randomIndex], result[index]];
    }
    return result;
  }

  function createQueue(ids, lastId) {
    const queue = shuffle(ids);
    if (queue.length > 1 && queue[0] === lastId) {
      const swapIndex = queue.findIndex((id) => id !== lastId);
      if (swapIndex > 0) {
        [queue[0], queue[swapIndex]] = [queue[swapIndex], queue[0]];
      }
    }
    return queue;
  }

  function storageKey(poolKey) {
    return `${storagePrefix}${poolKey}`;
  }

  function readBag(poolKey) {
    const fallback = memoryShuffleBags[poolKey] || null;
    try {
      const raw = window.localStorage.getItem(storageKey(poolKey));
      return raw ? JSON.parse(raw) : fallback;
    } catch (error) {
      return fallback;
    }
  }

  function writeBag(poolKey, bag) {
    memoryShuffleBags[poolKey] = bag;
    try {
      window.localStorage.setItem(storageKey(poolKey), JSON.stringify(bag));
    } catch (error) {
      // localStorage may be unavailable in some local browser settings; memory fallback is enough.
    }
  }

  function sameIds(left, right) {
    if (!Array.isArray(left) || !Array.isArray(right) || left.length !== right.length) return false;
    return left.every((id, index) => id === right[index]);
  }

  function drawFromShuffleBag(poolKey, items) {
    if (!items.length) return null;

    const byId = new Map(items.map((item) => [item.id, item]));
    const ids = items.map((item) => item.id).sort();
    let bag = readBag(poolKey);

    if (!bag || !sameIds(bag.ids, ids) || !Array.isArray(bag.queue) || !Number.isInteger(bag.index)) {
      bag = {
        ids,
        queue: createQueue(ids, bag ? bag.lastId : ""),
        index: 0,
        lastId: bag ? bag.lastId : ""
      };
    }

    if (bag.index >= bag.queue.length) {
      bag.queue = createQueue(ids, bag.lastId);
      bag.index = 0;
    }

    let selectedId = bag.queue[bag.index];
    if (!byId.has(selectedId)) {
      bag.queue = createQueue(ids, bag.lastId);
      bag.index = 0;
      selectedId = bag.queue[bag.index];
    }

    bag.index += 1;
    bag.lastId = selectedId;
    writeBag(poolKey, bag);

    return byId.get(selectedId) || null;
  }

  function freePool(filter) {
    return publicFreeWorks().filter((work) => {
      if (!filter) return true;
      return work.period === filter;
    });
  }

  function freePoolKey(filter) {
    if (!filter) return "all_free";
    if (filter === "近期作品") return "recent_free";
    if (filter === "早期作品") return "early_free";
    if (filter === "远古作品") return "ancient_free";
    return `free_${filter}`;
  }

  function drawFree(filter) {
    const candidates = freePool(filter);
    setFreeResultHtml(freeCard(drawFromShuffleBag(freePoolKey(filter), candidates)));
  }

  function drawPaid(filter) {
    const candidates = paidWorks.filter((work) => {
      if (!filter) return true;
      return (work.categoryTags || []).includes(filter);
    });
    paidResult.innerHTML = paidCard(drawFromShuffleBag(`paid_${filter || "all"}`, candidates));
  }

  function drawPaidFromHome() {
    const work = drawFromShuffleBag("paid_home", paidWorks);
    setFreeResultHtml(paidCard(work, "今天推荐的付费作品是"));
  }

  function renderPaidList() {
    paidList.innerHTML = paidWorks.map(paidCard).join("");
  }

  function showSection(name) {
    const showPaid = name === "paid";
    freeSection.classList.toggle("section--active", !showPaid);
    paidSection.classList.toggle("section--active", showPaid);
    if (showPaid && !paidList.innerHTML.trim()) {
      renderPaidList();
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  document.querySelector("#drawHeroFree").addEventListener("click", () => drawFree());
  document.querySelector("#drawAnyPaid").addEventListener("click", () => drawPaid());
  document.querySelector("#drawPaidFromHome").addEventListener("click", drawPaidFromHome);
  document.querySelector("#showFreeButton").addEventListener("click", () => showSection("free"));
  document.querySelector("#showAllPaid").addEventListener("click", renderPaidList);

  document.querySelectorAll("[data-free-filter]").forEach((button) => {
    button.addEventListener("click", () => drawFree(button.dataset.freeFilter));
  });

  const companionEntryBtn = document.querySelector("#openCompanionCollection");
  if (companionEntryBtn) companionEntryBtn.addEventListener("click", showCompanionCollection);
  syncCompanionEntryButtonLabel();

  document.querySelectorAll("[data-paid-filter]").forEach((button) => {
    button.addEventListener("click", () => drawPaid(button.dataset.paidFilter));
  });

  drawFree();
})();
