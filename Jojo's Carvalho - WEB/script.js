'use strict';


const header = document.querySelector("[data-header]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");

navToggleBtn.addEventListener("click", function () {
  header.classList.toggle("nav-active");
  this.classList.toggle("active");
});


const navbarLinks = document.querySelectorAll("[data-nav-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    header.classList.toggle("nav-active");
    navToggleBtn.classList.toggle("active");
  });
}


const backTopBtn = document.querySelector("[data-back-to-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});



function enviarFormulario() {

  const nome = document.getElementById('input-nome').value;
  const telefone = document.getElementById('input-tel').value;
  const mensagem = document.getElementById('input-msg').value;


  const mensagemWhatsApp = `*Hello! my name is:* ${nome}.\n*My message is*: ${mensagem}.\n*Yours sincerely,*`;



  const numeroWhatsApp = `55${telefone.replace(/\D/g, '')}@c.us`;


  window.open(`https://wa.me/${5581982607274}?text=${encodeURIComponent(mensagemWhatsApp)}`);


  document.getElementById('input-nome').value = '';
  document.getElementById('input-tel').value = '';
  document.getElementById('input-msg').value = '';

}
