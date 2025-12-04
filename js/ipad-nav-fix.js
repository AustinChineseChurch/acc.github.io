// ipad-nav-fix.js
document.addEventListener("DOMContentLoaded", function () {

  // ------------------------------------
  // 只检测 iPad Safari（不会误伤 iPhone）
  // ------------------------------------
  const isIpadSafari =
    navigator.userAgent.includes("iPad") ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);

  if (!isIpadSafari) return;

  // ------------------------------------
  // 给每个 bar-option 的 <h1> 加点击展开菜单
  // ------------------------------------
  const barOptions = document.querySelectorAll(".bar-option");

  barOptions.forEach(option => {
    const title = option.querySelector("h1");
    const dropdown = option.querySelector(".dropdown");

    if (!title || !dropdown) return;

    // 默认隐藏
    dropdown.style.display = "none";

    // 点击标题展开/收起菜单
    title.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();

      const isHidden = dropdown.style.display === "none";
      dropdown.style.display = isHidden ? "block" : "none";
    });

    // touchstart → 转成 click（iPad 必须要这个）
    title.addEventListener("touchstart", function (e) {
      e.preventDefault();
      title.click();
    });
  });

  // 点击空白处关闭所有菜单
  document.addEventListener("click", function () {
    document.querySelectorAll(".dropdown").forEach(dd => {
      dd.style.display = "none";
    });
  });
});