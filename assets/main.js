(function(){
  var toggle = document.getElementById('menu-toggle');
  if(!toggle) return;
  toggle.addEventListener('click', function(){
    var expanded = this.getAttribute('aria-expanded') === 'true';
    this.setAttribute('aria-expanded', String(!expanded));
    document.documentElement.classList.toggle('nav-open');
  });
})();
