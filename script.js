/*
  VEGAMAN Plays website settings
  1. Replace CHANNEL_URL with your real YouTube channel URL.
  2. Add your real video details in the VIDEOS array if you want clickable video cards.
*/
const CHANNEL_URL = "https://www.youtube.com/channel/UCslcNfLVRcibZjh2Z7ow8UA";

const VIDEOS = [
  { title: "Minecraft Survival Challenge", description: "Can I survive with only one heart?", type: "CHALLENGE", url: "", theme: "minecraft", thumb: "SURVIVAL|CHALLENGE" },
  { title: "Trying a New Roblox Game", description: "Let's see what happens in this game!", type: "GAMEPLAY", url: "", theme: "roblox", thumb: "FIRST TIME|PLAYING!" },
  { title: "Can I Survive This Horror Game?", description: "Lights off, headphones on. Big mistake!", type: "HORROR GAME", url: "", theme: "horror", thumb: "DON'T|LOOK BACK" }
];

function setChannelLinks() {
  ["navSubscribe", "heroSubscribe", "communitySubscribe", "bottomSubscribe", "allVideos"].forEach(id => {
    const link = document.getElementById(id);
    if (link) link.href = CHANNEL_URL;
  });
}

function renderVideos() {
  const grid = document.getElementById("videoGrid");
  if (!grid) return;
  grid.innerHTML = VIDEOS.map(video => {
    const theme = ["minecraft", "roblox", "horror"].includes(video.theme) ? video.theme : "minecraft";
    const thumb = (video.thumb || "NEW|VIDEO").split("|");
    const card = `
      <article class="video-card">
        <a href="${video.url || CHANNEL_URL}" target="_blank" rel="noopener" aria-label="Watch ${escapeHtml(video.title)}">
          <div class="video-thumb thumb-${theme}">
            <span class="thumb-label">${escapeHtml(video.type)}</span>
            <span class="play-icon">▶</span>
            <span class="thumb-title">${escapeHtml(thumb[0])}<br>${escapeHtml(thumb[1] || "")}</span>
          </div>
          <div class="video-info">
            <span class="video-type">${escapeHtml(video.type)}</span>
            <h3>${escapeHtml(video.title)}</h3>
            <p>${escapeHtml(video.description)}</p>
          </div>
        </a>
      </article>`;
    return card;
  }).join("");
}
function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, char => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[char]));
}

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    const open = mainNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.textContent = open ? "×" : "☰";
  });
  mainNav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  }));
}
document.getElementById("year").textContent = new Date().getFullYear();
setChannelLinks();
renderVideos();
