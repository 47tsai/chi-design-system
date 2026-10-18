(() => {
  const root = document.documentElement;
  const themeSelect = document.querySelector("[data-theme-select]");
  const savedTheme = (() => { try { return localStorage.getItem("chi-theme-mode"); } catch { return null; } })();
  const validTheme = value => ["system", "light", "dark"].includes(value);
  const applyTheme = mode => {
    const selected = validTheme(mode) ? mode : "system";
    root.dataset.chiTheme = selected === "system"
      ? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
      : selected;
    root.dataset.chiThemeMode = selected;
    if (themeSelect) themeSelect.value = selected;
    try { localStorage.setItem("chi-theme-mode", selected); } catch {}
  };
  applyTheme(validTheme(savedTheme) ? savedTheme : "system");
  themeSelect?.addEventListener("change", event => applyTheme(event.target.value));
  const media = window.matchMedia("(prefers-color-scheme: dark)");
  media.addEventListener?.("change", () => {
    if (root.dataset.chiThemeMode === "system") applyTheme("system");
  });

  const sidebar = document.querySelector("#sidebar");
  const menuToggle = document.querySelector("[data-sidebar-toggle]");
  const closeSidebar = () => {
    sidebar?.classList.remove("is-open");
    menuToggle?.setAttribute("aria-expanded", "false");
    menuToggle?.setAttribute("aria-label", "開啟導覽");
  };
  menuToggle?.addEventListener("click", () => {
    const open = !sidebar?.classList.contains("is-open");
    sidebar?.classList.toggle("is-open", open);
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.setAttribute("aria-label", open ? "關閉導覽" : "開啟導覽");
  });
  document.querySelectorAll(".chi-sidebar__nav a").forEach(link => {
    link.addEventListener("click", () => {
      document.querySelectorAll(".chi-sidebar__nav a").forEach(item => {
        item.classList.remove("is-active");
        item.removeAttribute("aria-current");
      });
      link.classList.add("is-active");
      link.setAttribute("aria-current", "page");
      closeSidebar();
    });
  });
  document.addEventListener("keydown", event => {
    if (event.key === "Escape") closeSidebar();
  });
  document.addEventListener("click", event => {
    if (sidebar?.classList.contains("is-open") && !sidebar.contains(event.target) && !menuToggle?.contains(event.target)) closeSidebar();
  });

  const toastRegion = document.querySelector("[data-toast-region]");
  const toast = message => {
    if (!toastRegion) return;
    const item = document.createElement("div");
    item.className = "chi-toast-message";
    item.setAttribute("role", "status");
    item.textContent = message;
    toastRegion.append(item);
    window.setTimeout(() => item.remove(), 2800);
  };
  document.querySelectorAll("[data-toast]").forEach(button => button.addEventListener("click", () => toast(button.dataset.toast)));
  document.querySelector("[data-demo-form]")?.addEventListener("submit", event => {
    event.preventDefault();
    if (!event.currentTarget.reportValidity()) return;
    toast("表單示範成功，尚未連接任何後端。");
  });
  document.querySelector("[data-reset-demo]")?.addEventListener("click", () => {
    document.querySelector("[data-demo-form]")?.reset();
    applyTheme("system");
    toast("示範設定已重設。");
  });
})();
