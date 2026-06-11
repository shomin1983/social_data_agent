const assets = [
  {
    title: "雷門合照",
    type: "photo",
    category: "景點",
    image: "assets/travel/kaminarimon-2.png",
    position: "center 42%",
  },
  {
    title: "雷門街景",
    type: "photo",
    category: "景點",
    image: "assets/travel/kaminarimon-3.png",
    position: "center 42%",
  },
  {
    title: "東京鐵塔夜景",
    type: "photo",
    category: "夜景",
    image: "assets/travel/tokyo-tower-2.png",
    position: "center 36%",
  },
  {
    title: "淺草寺參道",
    type: "photo",
    category: "風景",
    image: "assets/travel/sensoji.png",
    position: "center 44%",
  },
  {
    title: "雷門短片",
    type: "video",
    category: "景點",
    image: "assets/travel/kaminarimon-1.jpeg",
    position: "center center",
  },
  {
    title: "東京鐵塔直式照",
    type: "photo",
    category: "夜景",
    image: "assets/travel/tokyo-tower-1.png",
    position: "center 32%",
  },
];

const outputSets = [
  {
    ig: {
      title: "IG 貼文 Caption",
      body: "從雷門的大燈籠開始，把東京的一天慢慢走成旅行日記。\n\n淺草寺的香火、仲見世通的小吃、傍晚後亮起的東京鐵塔，每一段都剛好有不同的節奏。",
      preview: "從雷門的大燈籠開始，把東京的一天慢慢走成旅行日記。",
    },
    threads: {
      title: "Threads 短貼文",
      body: "今天的東京路線很剛好：雷門拍第一張，淺草寺慢慢逛，最後用東京鐵塔夜景收尾。不是很趕，但每一站都很有記憶點。",
      preview: "雷門拍第一張，淺草寺慢慢逛，最後用東京鐵塔夜景收尾。",
    },
    reels: {
      title: "Reels 腳本",
      body: "0-3s：雷門大燈籠開場，字幕「東京第一站」\n3-6s：淺草寺參拜與建築細節，字幕「把今天留在東京的光裡」\n6-10s：東京鐵塔夜景亮起，字幕「城市開始發光」",
      preview: "10 秒東京日記：雷門開場，淺草寺接上細節，最後收在東京鐵塔夜色。",
    },
    hashtags: {
      title: "Hashtags / 標題",
      body: "#東京旅行 #雷門 #淺草寺 #東京鐵塔 #日本自由行 #旅行日記 #TokyoTravel #Asakusa\n\n標題建議：從雷門走到東京的夜",
      preview: "#東京旅行 #雷門 #淺草寺 #東京鐵塔",
    },
    music: {
      title: "配樂建議",
      body: "情緒：明亮、城市感、帶一點復古旅行氛圍\n節奏：96-112 BPM\n類型：City pop、輕電子、日系 lo-fi\n使用段落：雷門開場保留環境音，東京鐵塔夜景進副歌。",
      preview: "配樂情緒：明亮、城市感、復古旅行氛圍，適合 city pop 或日系 lo-fi。",
    },
  },
  {
    ig: {
      title: "IG 貼文 Caption",
      body: "東京最迷人的地方，是同一天可以有很傳統的淺草，也可以有很現代的城市夜景。\n\n雷門、淺草寺、東京鐵塔，剛好把這趟旅行的開場、散步和收尾都安排好了。",
      preview: "雷門、淺草寺、東京鐵塔，剛好把這趟旅行的開場、散步和收尾都安排好了。",
    },
    threads: {
      title: "Threads 短貼文",
      body: "淺草很適合慢慢走。雷門是熱鬧的開場，淺草寺是安靜一點的停留，東京鐵塔則像替這天按下漂亮的結尾。",
      preview: "雷門是熱鬧的開場，東京鐵塔像替這天按下漂亮的結尾。",
    },
    reels: {
      title: "Reels 腳本",
      body: "0-3s：手持走向雷門，字幕「東京散步開始」\n3-6s：淺草寺屋簷、香爐與人群細節，字幕「把回憶收進光裡」\n6-10s：東京鐵塔亮燈慢速轉場，字幕「今晚留給東京」",
      preview: "10 秒東京日記：雷門開場，淺草寺細節轉場，最後收在東京鐵塔。",
    },
    hashtags: {
      title: "Hashtags / 標題",
      body: "#日本旅行 #東京景點 #Asakusa #Kaminarimon #Sensoji #TokyoTower #旅拍靈感\n\n標題建議：今晚留給東京",
      preview: "#日本旅行 #東京景點 #Asakusa #TokyoTower",
    },
    music: {
      title: "配樂建議",
      body: "情緒：溫暖、輕快、夜景收束感\n節奏：84-100 BPM\n類型：Warm piano、soft beat、city night chill\n使用段落：淺草寺片段降低音量，東京鐵塔段落加一點鼓點。",
      preview: "配樂情緒：溫暖、輕快、夜景收束感，適合 city night chill。",
    },
  },
];

const analysisSteps = [
  { percent: 18, title: "讀取東京素材", message: "正在掃描雷門、淺草寺與東京鐵塔相關照片。", media: 0 },
  { percent: 38, title: "辨識出景點脈絡", message: "已辨識出雷門開場、淺草寺散步與東京鐵塔夜景。", media: 1 },
  { percent: 58, title: "挑選精華片段", message: "正在找出最適合放在首圖、轉場與收尾的素材。", media: 2 },
  { percent: 78, title: "生成平台版本", message: "正在產生 IG、Threads、Reels 的東京旅行語氣。", media: 3 },
  { percent: 100, title: "完成輸出建議", message: "已整理東京旅遊 hashtag、標題與配樂情緒。", media: 4 },
];

let loaded = false;
let analyzed = false;
let activeOutput = "ig";
let variation = 0;
let extraHashtagAdded = false;
let hashtagAnimationPending = false;
let publishing = false;
let assetLoading = false;
let assetRevealRun = 0;
let reelFinalCaption = "城市開始發光";
let reelTextAnimating = false;
let reelPreviewLoading = false;

const els = {
  screens: [...document.querySelectorAll(".screen")],
  importScreen: document.querySelector("#importScreen"),
  analysisScreen: document.querySelector("#analysisScreen"),
  outputScreen: document.querySelector("#outputScreen"),
  assetCount: document.querySelector("#assetCount"),
  assetGrid: document.querySelector("#assetGrid"),
  loadAssets: document.querySelector("#loadAssets"),
  startAnalysis: document.querySelector("#startAnalysis"),
  sequenceRows: [...document.querySelectorAll(".sequence-row")],
  analysisTitle: document.querySelector("#analysisTitle"),
  analysisMessage: document.querySelector("#analysisMessage"),
  progressLabel: document.querySelector("#progressLabel"),
  progressBar: document.querySelector("#progressBar"),
  livePreview: document.querySelector("#livePreview"),
  restart: document.querySelector("#restart"),
  tabs: [...document.querySelectorAll(".tab")],
  outputCard: document.querySelector("#outputCard"),
  supportCard: document.querySelector("#supportCard"),
  phoneContent: document.querySelector("#phoneContent"),
  publish: document.querySelector("#publish"),
  addPerfectCorp: document.querySelector("#addPerfectCorp"),
  aiClose: document.querySelector("#aiClose"),
  aiDialog: document.querySelector("#aiDialog"),
  aiForm: document.querySelector("#aiForm"),
  aiInput: document.querySelector("#aiInput"),
  entryLoader: document.querySelector("#entryLoader"),
};

window.setTimeout(() => {
  document.body.classList.remove("app-loading");
  els.entryLoader?.classList.add("hidden");
}, 1500);

function showScreen(screen) {
  els.screens.forEach((item) => item.classList.toggle("active", item === screen));
  screen.scrollIntoView({ block: "start" });
}

function setSequence(stepIndex) {
  els.sequenceRows.forEach((row, index) => {
    row.classList.toggle("visible", index <= stepIndex);
    row.classList.toggle("done", index < stepIndex);
    row.classList.toggle("active", index === stepIndex);
  });
}

function setProgress(percent) {
  els.progressLabel.textContent = `${percent}%`;
  els.progressBar.style.width = `${percent}%`;
}

function assetCardMarkup(asset) {
  return `
    <article class="asset-card revealing" style="background-image:${assetBackground(asset)}; background-position:${assetPosition(asset)}" aria-label="${asset.title}">
      <b>${asset.type === "video" ? "Video" : "Photo"}</b>
    </article>
  `;
}

async function renderAssets() {
  if (assetLoading || loaded) return;
  assetLoading = true;
  loaded = false;
  assetRevealRun += 1;
  const runId = assetRevealRun;
  els.loadAssets.disabled = true;
  els.startAnalysis.disabled = true;
  els.assetGrid.innerHTML = "";
  els.assetCount.textContent = "0 items";

  for (let index = 0; index < assets.length; index += 1) {
    await new Promise((resolve) => setTimeout(resolve, 500));
    if (runId !== assetRevealRun) return;
    els.assetGrid.insertAdjacentHTML("beforeend", assetCardMarkup(assets[index]));
    els.assetCount.textContent = `${index + 1} items`;
  }

  loaded = true;
  assetLoading = false;
  els.loadAssets.disabled = false;
  els.startAnalysis.disabled = false;
}

function currentOutput() {
  return outputSets[variation][activeOutput];
}

function outputName(key) {
  return {
    ig: "IG 貼文",
    threads: "Threads",
    reels: "Reels",
    hashtags: "Hashtags",
    music: "配樂",
  }[key];
}

function splitBody(output) {
  return output.body.split("\n").filter((line) => line.trim());
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
}

function reelScriptLines(output) {
  const safeFinalCaption = escapeHtml(reelFinalCaption);
  return splitBody(output).map((line, index) =>
    index === 2 ? line.replace(/字幕「[^」]*」/, `字幕「${safeFinalCaption}」`) : line,
  );
}

function reelCaptionFromPrompt(value) {
  const marker = "改成";
  const markerIndex = value.lastIndexOf(marker);
  if (markerIndex === -1) return value;
  const caption = value.slice(markerIndex + marker.length).trim();
  return caption || value;
}

function assetBackground(asset) {
  return `url(${asset.image})`;
}

function assetPosition(asset) {
  return asset.position || "center";
}

function supportOutput(type) {
  return outputSets[variation][type];
}

function musicPreviewLine() {
  return supportOutput("music").preview.replace("配樂情緒：", "配樂建議：");
}

function hashtagChips() {
  const tags = supportOutput("hashtags").preview.split(" ").filter((tag) => tag.startsWith("#"));
  if (extraHashtagAdded && !tags.includes("#PerfectCorp")) tags.push("#PerfectCorp");
  return tags
    .map((tag) => `<span class="${tag === "#PerfectCorp" && hashtagAnimationPending ? "hashtag-pop" : ""}">${tag}</span>`)
    .join("");
}

function hashtagPreview() {
  const base = supportOutput("hashtags").preview;
  return extraHashtagAdded && !base.includes("#PerfectCorp") ? `${base} #PerfectCorp` : base;
}

function renderIgLayout(output) {
  const composerAssets = [assets[0], assets[1], assets[3], assets[2]];
  return `
    <div class="platform-layout ig-layout">
      <div class="layout-head">
        <span class="platform-mark ig-mark">IG</span>
        <div>
          <h3>${output.title}</h3>
          <p>Carousel caption + 首圖排序</p>
        </div>
      </div>
      <div class="ig-composer">
        <div class="ig-grid">
          ${composerAssets
            .map((asset) => `<span style="background-image:${assetBackground(asset)}; background-position:${assetPosition(asset)}"></span>`)
            .join("")}
        </div>
        <div class="caption-box">
          ${splitBody(output)
            .map((line) => `<p>${line}</p>`)
            .join("")}
          <div class="inline-hashtags">${hashtagChips()}</div>
        </div>
      </div>
    </div>
  `;
}

function renderThreadsLayout(output) {
  const lines = [
    output.body,
    "路線感：雷門開場 → 淺草寺散步 → 東京鐵塔夜景。",
    "貼文語氣：像朋友分享行程，不要太像攻略。",
  ];
  return `
    <div class="platform-layout threads-layout">
      <div class="layout-head">
        <span class="platform-mark threads-mark">@</span>
        <div>
          <h3>${output.title}</h3>
          <p>短貼文串 + 補充回覆</p>
        </div>
      </div>
      <div class="thread-stack">
        ${lines
          .map(
            (line, index) => `
              <article class="thread-bubble">
                <span></span>
                <div>
                  <p>${line}</p>
                  ${index === 0 ? `<div class="thread-photo" style="background-image:${assetBackground(assets[0])}; background-position:${assetPosition(assets[0])}"></div>` : ""}
                </div>
                ${index < lines.length - 1 ? '<i></i>' : ""}
              </article>
            `,
          )
          .join("")}
      </div>
    </div>
  `;
}

function renderReelsLayout(output) {
  const lines = reelScriptLines(output);
  const reelAssets = [assets[0], assets[3], assets[2]];
  return `
    <div class="platform-layout reels-layout">
      <div class="layout-head">
        <span class="platform-mark reels-mark">▶</span>
        <div>
          <h3>${output.title}</h3>
          <p>短影音分鏡 + 字幕節奏</p>
          <p class="music-line">${musicPreviewLine()}</p>
        </div>
      </div>
      <div class="reel-board">
        ${lines
          .map((line, index) => {
            const [time, text] = line.split("：");
            const asset = reelAssets[index] || assets[0];
            return `
              <article class="reel-scene ${index === 2 && reelTextAnimating ? "reel-updated" : ""}">
                <div class="scene-thumb" style="background-image:${assetBackground(asset)}; background-position:${assetPosition(asset)}"></div>
                <div>
                  <b>${time}</b>
                  <p>${text || line}</p>
                </div>
              </article>
            `;
          })
          .join("")}
      </div>
    </div>
  `;
}

function renderInfoLayout(output) {
  return `
    <div class="platform-layout info-layout">
      <div class="layout-head">
        <span class="platform-mark info-mark">#</span>
        <div>
          <h3>${output.title}</h3>
          <p>${activeOutput === "music" ? "情緒與節奏建議" : "標籤與標題建議"}</p>
        </div>
      </div>
      <div class="info-lines">
        ${splitBody(output)
          .map((line) => `<p>${line}</p>`)
          .join("")}
      </div>
    </div>
  `;
}

function renderOutputLayout(output) {
  if (activeOutput === "ig") return renderIgLayout(output);
  if (activeOutput === "threads") return renderThreadsLayout(output);
  if (activeOutput === "reels") return renderReelsLayout(output);
  return renderInfoLayout(output);
}

function renderSupportPanel() {
  const hashtags = supportOutput("hashtags");
  const music = supportOutput("music");
  return `
    <div class="support-head">
      <span>發布輔助</span>
      <p>跟著目前文案一起使用</p>
    </div>
    <div class="support-grid">
      <article>
        <b>Hashtags</b>
        <p>${hashtagPreview()}</p>
      </article>
      <article>
        <b>配樂</b>
        <p>${music.preview}</p>
      </article>
    </div>
  `;
}

function renderPhoneIg(output) {
  const thumbAssets = [assets[1], assets[3], assets[2]];
  return `
    <div class="phone-appbar">
      <span>IG 貼文</span>
    </div>
    <div class="phone-ig-post">
      <div class="phone-ig-profile">
        <span></span>
        <p>tokyo.diary</p>
      </div>
      <div class="phone-media phone-ig" style="background-image:${assetBackground(assets[0])}; background-position:${assetPosition(assets[0])}"></div>
      <div class="phone-actions">♡ ◇ ↗</div>
      <div class="phone-thumbs">
        ${thumbAssets
          .map((asset) => `<span class="phone-thumb" style="background-image:${assetBackground(asset)}; background-position:${assetPosition(asset)}"></span>`)
          .join("")}
      </div>
      <p class="phone-copy">${output.preview}</p>
      <div class="phone-hashtags">${hashtagChips()}</div>
    </div>
  `;
}

function renderPhoneThreads(output) {
  const lines = [output.preview, "雷門 → 淺草寺 → 東京鐵塔", "這個路線真的很適合一天慢慢走。"];
  return `
    <div class="phone-appbar phone-darkbar">
      <span>Threads</span>
      <b>@</b>
    </div>
    <div class="phone-thread-list">
      ${lines
        .map(
          (line, index) => `
            <article class="phone-thread-item">
              <span></span>
              <div>
                <p>${line}</p>
                ${index === 0 ? `<div class="phone-thread-photo" style="background-image:${assetBackground(assets[0])}; background-position:${assetPosition(assets[0])}"></div>` : ""}
              </div>
              ${index < lines.length - 1 ? "<i></i>" : ""}
            </article>
          `,
        )
        .join("")}
    </div>
  `;
}

function renderPhoneReels(output) {
  const safeFinalCaption = escapeHtml(reelFinalCaption);
  return `
    <div class="phone-reel-screen">
      ${reelPreviewLoading ? '<div class="phone-reel-loading"><i></i><span>重新生成 Reels</span></div>' : ""}
      <div class="phone-reel-progress" aria-hidden="true"><span></span></div>
      <div class="phone-reel-video" aria-label="Reels 10 秒模擬播放">
        <div class="phone-reel-shot shot-one" style="background-image:${assetBackground(assets[0])}; background-position:${assetPosition(assets[0])}"></div>
        <div class="phone-reel-shot shot-two" style="background-image:${assetBackground(assets[3])}; background-position:${assetPosition(assets[3])}"></div>
        <div class="phone-reel-shot shot-three" style="background-image:${assetBackground(assets[2])}; background-position:${assetPosition(assets[2])}"></div>
        <div class="phone-reel-copy copy-one">東京第一站</div>
        <div class="phone-reel-copy copy-two">把今天留在東京的光裡</div>
        <div class="phone-reel-copy copy-three">${safeFinalCaption}</div>
      </div>
      <div class="phone-reel-top">
        <span>Reels</span>
        <i>播放中</i>
      </div>
      <div class="phone-reel-side">
        <span>♡</span>
        <span>💬</span>
        <span>↗</span>
      </div>
      <div class="phone-reel-caption">
        <b>東京 10 秒日記</b>
      </div>
    </div>
  `;
}

function renderPhoneInfo(output) {
  return `
    <div class="phone-appbar">
      <span>${outputName(activeOutput)}</span>
      <b>#</b>
    </div>
    <div class="phone-info-card">
      <h4>${output.title}</h4>
      ${splitBody(output)
        .map((line) => `<p>${line}</p>`)
        .join("")}
    </div>
  `;
}

function updatePhonePreview(output) {
  if (activeOutput === "ig") {
    els.phoneContent.innerHTML = renderPhoneIg(output);
  } else if (activeOutput === "threads") {
    els.phoneContent.innerHTML = renderPhoneThreads(output);
  } else if (activeOutput === "reels") {
    els.phoneContent.innerHTML = renderPhoneReels(output);
  } else {
    els.phoneContent.innerHTML = renderPhoneInfo(output);
  }
}

function updateOutput() {
  const output = currentOutput();
  els.outputCard.className = `output-card output-${activeOutput}`;
  els.outputCard.innerHTML = renderOutputLayout(output);
  els.supportCard.innerHTML = renderSupportPanel();
  els.supportCard.hidden = ["ig", "threads", "reels"].includes(activeOutput);
  els.addPerfectCorp.hidden = false;
  updatePhonePreview(output);
  publishing = false;
  els.publish.classList.remove("publishing");
  els.publish.disabled = false;
  els.publish.textContent = "發布";
}

function finishAnalysis() {
  analyzed = true;
  setSequence(5);
  updateOutput();
  window.setTimeout(() => showScreen(els.outputScreen), 520);
}

async function runAnalysis() {
  if (!loaded) return;
  analyzed = false;
  els.startAnalysis.disabled = true;
  showScreen(els.analysisScreen);
  setProgress(0);
  setSequence(0);

  for (let index = 0; index < analysisSteps.length; index += 1) {
    const step = analysisSteps[index];
    setSequence(index);
    setProgress(step.percent);
    els.analysisTitle.textContent = step.title;
    els.analysisMessage.textContent = step.message;
    els.livePreview.style.backgroundImage = assets[step.media] ? assetBackground(assets[step.media]) : "";
    els.livePreview.style.backgroundPosition = assets[step.media] ? assetPosition(assets[step.media]) : "";
    els.livePreview.textContent = assets[step.media]?.title || "Tokyo memories";
    await new Promise((resolve) => setTimeout(resolve, 2000));
  }

  finishAnalysis();
  els.startAnalysis.disabled = false;
}

function resetPrototype() {
  loaded = false;
  analyzed = false;
  assetLoading = false;
  assetRevealRun += 1;
  activeOutput = "ig";
  variation = 0;
  extraHashtagAdded = false;
  hashtagAnimationPending = false;
  reelFinalCaption = "城市開始發光";
  reelTextAnimating = false;
  reelPreviewLoading = false;
  els.aiDialog.classList.remove("open");
  els.aiDialog.querySelectorAll(".ai-message.user, .ai-message.confirm").forEach((message) => message.remove());
  els.assetCount.textContent = "0 items";
  els.assetGrid.innerHTML = '<div class="empty-state">尚未加入任何檔案</div>';
  els.loadAssets.disabled = false;
  els.startAnalysis.disabled = true;
  els.tabs.forEach((item) => item.classList.toggle("active", item.dataset.output === "ig"));
  setProgress(0);
  setSequence(-1);
  showScreen(els.importScreen);
}

els.loadAssets.addEventListener("click", renderAssets);
els.startAnalysis.addEventListener("click", runAnalysis);
els.restart.addEventListener("click", resetPrototype);

els.publish.addEventListener("click", () => {
  if (publishing) return;
  publishing = true;
  els.publish.disabled = true;
  els.publish.classList.add("publishing");
  els.publish.textContent = "發布中";
  window.setTimeout(() => {
    publishing = false;
    els.publish.classList.remove("publishing");
    els.publish.disabled = false;
    els.publish.textContent = "已發布";
  }, 2000);
});

els.addPerfectCorp.addEventListener("click", () => {
  els.aiDialog.classList.toggle("open");
  if (els.aiDialog.classList.contains("open")) els.aiInput.focus();
});

els.aiClose.addEventListener("click", () => {
  els.aiDialog.classList.remove("open");
});

els.aiForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const value = els.aiInput.value.trim();
  if (!value) return;

  els.aiDialog.insertBefore(messageElement(value, "user"), els.aiForm);
  scrollAiDialogToBottom();
  if (activeOutput === "reels") {
    reelFinalCaption = reelCaptionFromPrompt(value);
    reelTextAnimating = true;
    reelPreviewLoading = true;
    updateOutput();
    els.aiDialog.classList.add("open");
    window.setTimeout(() => {
      reelPreviewLoading = false;
      updateOutput();
      els.aiDialog.classList.add("open");
      scrollAiDialogToBottom();
    }, 2000);
    window.setTimeout(() => {
      reelTextAnimating = false;
      document.querySelectorAll(".reel-updated").forEach((item) => item.classList.remove("reel-updated"));
    }, 2000);
    els.aiDialog.insertBefore(messageElement("已更新 Reels 最後一段文案，右側影片會從頭重新播放", "confirm"), els.aiForm);
    scrollAiDialogToBottom();
  } else if (value.includes("#PerfectCorp")) {
    extraHashtagAdded = true;
    hashtagAnimationPending = true;
    updateOutput();
    els.aiDialog.classList.add("open");
    window.setTimeout(() => {
      hashtagAnimationPending = false;
      document.querySelectorAll(".hashtag-pop").forEach((item) => item.classList.remove("hashtag-pop"));
    }, 950);
    els.aiDialog.insertBefore(
      messageElement("這是一個很棒的 HashTag，我已經幫你加到文案裡了", "confirm"),
      els.aiForm,
    );
    scrollAiDialogToBottom();
  }
  els.aiInput.value = "";
});

function messageElement(text, type) {
  const message = document.createElement("div");
  message.className = `ai-message ${type}`;
  message.textContent = text;
  return message;
}

function scrollAiDialogToBottom() {
  window.requestAnimationFrame(() => {
    els.aiDialog.scrollTop = els.aiDialog.scrollHeight;
  });
}

els.tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    activeOutput = tab.dataset.output;
    els.tabs.forEach((item) => item.classList.toggle("active", item === tab));
    if (analyzed) updateOutput();
  });
});

setSequence(-1);
updateOutput();
