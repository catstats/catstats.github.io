(() => {
  const key = 'zhongli-theme';
  const root = document.documentElement;
  const button = document.getElementById('theme-toggle');
  const browserTheme = document.querySelector('meta[name="theme-color"]');
  const system = matchMedia('(prefers-color-scheme: dark)');
  const readPreference = () => {
    try {
      const value = localStorage.getItem(key);
      return value === 'light' || value === 'dark' ? value : null;
    } catch (_) { return null; }
  };
  let preference = readPreference();
  const apply = (theme) => {
    root.dataset.theme = theme;
    browserTheme.content = theme === 'dark' ? '#141516' : '#faf9f6';
    const action = theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';
    button.setAttribute('aria-label', action);
    button.title = action;
  };
  apply(preference || (system.matches ? 'dark' : 'light'));
  button.addEventListener('click', () => {
    preference = root.dataset.theme === 'dark' ? 'light' : 'dark';
    try { localStorage.setItem(key, preference); } catch (_) {}
    apply(preference);
  });
  system.addEventListener('change', (event) => {
    if (!preference) apply(event.matches ? 'dark' : 'light');
  });
  window.addEventListener('storage', (event) => {
    if (event.key === key || event.key === null) {
      preference = readPreference();
      apply(preference || (system.matches ? 'dark' : 'light'));
    }
  });
  button.hidden = false;
})();
