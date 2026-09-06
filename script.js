(function () {
  var toggle = document.getElementById('navToggle');
  var links  = document.getElementById('navLinks');
  var mq     = window.matchMedia('(max-width: 768px)');

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
