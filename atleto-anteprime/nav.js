// Navigazione delle anteprime: un elemento con data-go="x" mostra la schermata
// data-screen="x" dentro lo stesso contenitore data-scope; data-open / data-close
// aprono e chiudono le finestre modali.
document.addEventListener('click', function (e) {
  var open = e.target.closest('[data-open]');
  if (open) { document.getElementById(open.dataset.open).hidden = false; return; }
  var close = e.target.closest('[data-close]');
  if (close) { close.closest('.modal').hidden = true; return; }
  var go = e.target.closest('[data-go]');
  if (!go) return;
  var scope = go.closest('[data-scope]') || document;
  var target = go.dataset.go;
  scope.querySelectorAll('[data-screen]').forEach(function (s) {
    if (s.closest('[data-scope]') === scope) s.hidden = s.dataset.screen !== target;
  });
  scope.querySelectorAll('[data-go]').forEach(function (b) {
    if (b.closest('[data-scope]') === scope) b.classList.toggle('on', b.dataset.go === target);
  });
  var body = scope.querySelector('.ph-body, .main');
  if (body) body.scrollTop = 0;
});
