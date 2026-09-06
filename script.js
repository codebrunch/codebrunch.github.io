/* ------------------------------------------------------------
   mobile navigation
   ------------------------------------------------------------ */
(function () {
  var toggle = document.getElementById('navToggle');
  var links  = document.getElementById('navLinks');
  if (!toggle || !links) return;

  var mq = window.matchMedia('(max-width: 768px)');

  function collapse() {
    links.style.display = mq.matches ? 'none' : '';
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', '메뉴 열기');
  }
  collapse();
  mq.addEventListener('change', collapse);

  toggle.addEventListener('click', function () {
    var open = links.style.display === 'none';
    links.style.display = open ? 'flex' : 'none';
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? '메뉴 닫기' : '메뉴 열기');
  });

  links.addEventListener('click', function (e) {
    if (e.target.tagName === 'A' && mq.matches) collapse();
  });
})();

/* ------------------------------------------------------------
   theme toggle
   Light is the default. With no stored choice the page follows the
   system setting; clicking the button stamps data-theme on <html>,
   which wins over the system in both directions, and remembers it.
   The matching stamp is applied inline in <head> so a dark-mode
   viewer never sees a white flash before this file loads.
   ------------------------------------------------------------ */
(function () {
  var root = document.documentElement;
  var btn  = document.getElementById('themeToggle');
  if (!btn) return;

  var systemDark = window.matchMedia('(prefers-color-scheme: dark)');

  function current() {
    var forced = root.getAttribute('data-theme');
    if (forced === 'dark' || forced === 'light') return forced;
    return systemDark.matches ? 'dark' : 'light';
  }

  function relabel() {
    var next = current() === 'dark' ? '라이트' : '다크';
    btn.setAttribute('aria-label', next + ' 모드로 전환');
    btn.setAttribute('title', next + ' 모드로 전환');
  }
  relabel();

  btn.addEventListener('click', function () {
    var next = current() === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) { /* private mode */ }
    relabel();
  });

  // only matters while the viewer has made no explicit choice
  systemDark.addEventListener('change', relabel);
})();
