document.addEventListener('DOMContentLoaded', function () {
  pasangTombolMenu();
  pasangMenuAktif();
  pasangEfekIkonKontak();
});

function pasangTombolMenu() {
  const tombolMenu = document.getElementById('tombolMenu');
  const menuNav = document.getElementById('menuNav');

  if (tombolMenu && menuNav) {
    tombolMenu.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();

      menuNav.classList.toggle('terbuka');
    });
  }
}

function pasangMenuAktif() {
  var semuaLink = document.querySelectorAll('.menu-navigasi a');
  var menuNav = document.getElementById('menuNav');

  semuaLink.forEach(function (link) {
    link.addEventListener('click', function () {
      this.blur();

      if (menuNav) {
        menuNav.classList.remove('terbuka');
      }
    });
  });
}

function pasangEfekIkonKontak() {
  const semuaIkon = document.querySelectorAll('.ikon-kontak');

  for (let i = 0; i < semuaIkon.length; i++) {
    semuaIkon[i].addEventListener('click', function () {
      let namaPlatform = this.getAttribute('title');
      console.log(`Membuka ${namaPlatform}...`);
    });
  }
}