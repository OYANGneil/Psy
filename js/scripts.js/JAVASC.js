// MENU MOBILE
const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

toggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// DARK MODE
const darkBtn = document.getElementById("darkModeBtn");

darkBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// FORM AGENDAMENTO
const form = document.getElementById("formAgendamento");

form.addEventListener("submit", function(e){
  e.preventDefault();
  alert("Solicitação enviada com sucesso! Em breve entraremos em contato.");
  form.reset();
});