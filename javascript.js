window.onscroll = function () {
  scrollFunction();
  scroll1();
};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("navbar").style.height = "25px";
    document.getElementById("navbar").style.backgroundColor = "transparent";
    document.getElementById("lista-enlace").style.color = "#fff";
    document.getElementById("lista-enlace1").style.color = "#fff";
    document.getElementById("lista-enlace2").style.color = "#fff";
    document.getElementById("lista-enlace3").style.color = "#fff";
    document.getElementById("lista-enlace4").style.color = "#fff";
  } else {
    document.getElementById("navbar").style.height = "25px";
    document.getElementById("navbar").style.backgroundColor = "#0a2a43";
    document.getElementById("lista-enlace").style.color = "#fff";
    document.getElementById("lista-enlace1").style.color = "#fff";
    document.getElementById("lista-enlace2").style.color = "#fff";
    document.getElementById("lista-enlace3").style.color = "#fff";
    document.getElementById("lista-enlace4").style.color = "#fff";
  }
}

function scroll1() {
  let animacion = document.getElementById("animacion1");
  let animacion2 = document.getElementById("animacion2");
  let animacion3 = document.getElementById("animacion3");
  let positionObj1 = animacion.getBoundingClientRect().top;

  let tamanioPantalla = window.innerHeight / 2;
  if (positionObj1 < tamanioPantalla) {
    animacion.style.animation = "mover 1s ease-out ";
    animacion2.style.animation = "mover 1.5s ease-out";
    animacion3.style.animation = "mover 1s ease-out";
  }
}

//cambiar idioma curriculum
const cv1 = document.getElementById("img-cv-es");
const cv2 = document.getElementById("img-cv-en");

const btnen = document.getElementById("btn-cv-en");
const btnes2 = document.getElementById("btn-cv-es2");

const btnidiomaes = document.getElementById("btn-idioma-es");
const btnidiomaen = document.getElementById("btn-idioma-en");

function espanish() {
  console.log("hola");
  cv1.style.display = "block";
  cv2.style.display = "none";
  btnes2.style.display = "block";
  btnen.style.display = "none";
}

function english() {
  let es = document.getElementById("btn-idioma-en");
  console.log("hello");
  cv2.style.display = "block";
  cv1.style.display = "none";
  btnen.style.display = "block";
  btnes2.style.display = "none";
}

//cambiar de idioma página principal
const btnspanish = document.getElementById("btn-lenguaje-es");
const bntenglish = document.getElementById("btn-lenguaje-en");
const acercaEnglish = document.getElementById("acerca-de-mi-en");
const acercaEspanish = document.getElementById("acerca-de-mi-es");
const titleAbout = document.getElementById("title-about-me");
const tituloAcerca = document.getElementById("titulo-acerca-mi");
const listasIdiomaEs = document.getElementById("listas-idiomas-es");
const listasIdiomaEn = document.getElementById("listas-idiomas-en");
const proyectosEspanish = document.getElementById("proyectos-es");
const proyectosEspanish1 = document.getElementById("proyectos-es1");
const proyectosEspanish2 = document.getElementById("proyectos-es2");
const proyectosEspanish3 = document.getElementById("proyectos-es3");
const proyectosEspanish4 = document.getElementById("proyectos-es4");
const proyectosEspanish5 = document.getElementById("proyectos-es5");
const proyectosEnglish = document.getElementById("proyectos-en");
const proyectosEnglish1 = document.getElementById("proyectos-en1");
const proyectosEnglish2 = document.getElementById("proyectos-en2");
const proyectosEnglish3 = document.getElementById("proyectos-en3");
const proyectosEnglish4 = document.getElementById("proyectos-en4");
const proyectosEnglish5 = document.getElementById("proyectos-en5");

btnspanish.addEventListener("click", () => {
  console.log("hola");
  acercaEnglish.style.display = "none";
  acercaEspanish.style.display = "block";
  tituloAcerca.style.display = "block";
  titleAbout.style.display = "none";
  listasIdiomaEn.classList.add("listas-show");
  listasIdiomaEs.classList.remove("listas-show");
  proyectosEnglish.classList.add("proyectos-show");
  proyectosEspanish.classList.remove("proyectos-show");
  proyectosEspanish1.classList.remove("proyectos-show");
  proyectosEspanish2.classList.remove("proyectos-show");
  proyectosEspanish3.classList.remove("proyectos-show");
  proyectosEspanish4.classList.remove("proyectos-show");
  proyectosEspanish5.classList.remove("proyectos-show");
  proyectosEnglish1.classList.add("proyectos-show");
  proyectosEnglish2.classList.add("proyectos-show");
  proyectosEnglish3.classList.add("proyectos-show");
  proyectosEnglish4.classList.add("proyectos-show");
  proyectosEnglish5.classList.add("proyectos-show");
  serviciosEspanish();
  contactoEsp();
  cambiarIdiomaf("es");
});

bntenglish.addEventListener("click", () => {
  console.log("hello");
  acercaEnglish.style.display = "block";
  acercaEspanish.style.display = "none";
  titleAbout.style.display = "block";
  tituloAcerca.style.display = "none";
  listasIdiomaEs.classList.add("listas-show");
  listasIdiomaEn.classList.remove("listas-show");
  proyectosEspanish.classList.add("proyectos-show");
  proyectosEspanish1.classList.add("proyectos-show");
  proyectosEspanish2.classList.add("proyectos-show");
  proyectosEspanish3.classList.add("proyectos-show");
  proyectosEspanish4.classList.add("proyectos-show");
  proyectosEspanish5.classList.add("proyectos-show");
  proyectosEnglish.classList.remove("proyectos-show");
  proyectosEnglish1.classList.remove("proyectos-show");
  proyectosEnglish2.classList.remove("proyectos-show");
  proyectosEnglish3.classList.remove("proyectos-show");
  proyectosEnglish4.classList.remove("proyectos-show");
  proyectosEnglish5.classList.remove("proyectos-show");
  serviciosEnglish();
  contactoEng();
  cambiarIdiomaf("en");
});

//servicios
const servicioEs = document.getElementById("servicios");
const servicioEs1 = document.getElementById("servicios1");
const servicioEn = document.getElementById("servicios-en");
const servicioEn1 = document.getElementById("servicios-en1");

function serviciosEspanish() {
  servicioEs.classList.remove("servicios-show");
  servicioEs1.classList.remove("servicios-show");
  servicioEn.classList.add("servicios-show");
  servicioEn1.classList.add("servicios-show");
}
function serviciosEnglish() {
  servicioEs.classList.add("servicios-show");
  servicioEs1.classList.add("servicios-show");
  servicioEn.classList.remove("servicios-show");
  servicioEn1.classList.remove("servicios-show");
}

//contacto

const contactoEs = document.getElementById("contacto");
const contactoEs1 = document.getElementById("contacto1");
const contactoEs2 = document.getElementById("contacto2");
const contactoEs3 = document.getElementById("contacto3");
const contactoEs4 = document.getElementById("contacto4");
const contactoEs5 = document.getElementById("contacto5");
const contactoEn = document.getElementById("contacto-en");
const contactoEn1 = document.getElementById("contacto-en1");
const contactoEn2 = document.getElementById("contacto-en2");
const contactoEn3 = document.getElementById("contacto-en3");
const contactoEn4 = document.getElementById("contacto-en4");
const contactoEn5 = document.getElementById("contacto-en5");

function contactoEsp() {
  contactoEs.classList.remove("contacto-show");
  contactoEs1.classList.remove("contacto-show");
  contactoEs2.classList.remove("contacto-show");
  contactoEs3.classList.remove("contacto-show");
  contactoEs4.classList.remove("contacto-show");
  contactoEs5.classList.remove("contacto-show");
  contactoEn.classList.add("contacto-show");
  contactoEn1.classList.add("contacto-show");
  contactoEn2.classList.add("contacto-show");
  contactoEn3.classList.add("contacto-show");
  contactoEn4.classList.add("contacto-show");
  contactoEn5.classList.add("contacto-show");
}

function contactoEng() {
  contactoEs.classList.add("contacto-show");
  contactoEs1.classList.add("contacto-show");
  contactoEs2.classList.add("contacto-show");
  contactoEs3.classList.add("contacto-show");
  contactoEs4.classList.add("contacto-show");
  contactoEs5.classList.add("contacto-show");
  contactoEn.classList.remove("contacto-show");
  contactoEn1.classList.remove("contacto-show");
  contactoEn2.classList.remove("contacto-show");
  contactoEn3.classList.remove("contacto-show");
  contactoEn4.classList.remove("contacto-show");
  contactoEn5.classList.remove("contacto-show");
}

//cambiar idioma footer chaptgpt
// var textoContactoEsp = "Teléfono: 555-1234";
// var textoCorreoEsp = "Correo electrónico: info@miempresa.com";
// var textoAcercaDeEsp =
//   "Somos una empresa dedicada a la venta de productos de alta calidad.";

// var textoContactoIng = "Phone: 555-1234";
// var textoCorreoIng = "Email: info@mycompany.com";
// var textoAcercaDeIng =
//   "We are a company dedicated to selling high-quality products.";

// document.getElementById("btn-espanol").addEventListener("click", function () {
//   cambiarIdioma("es");
// });

// document.getElementById("btn-ingles").addEventListener("click", function () {
//   cambiarIdioma("en");
// });
// function cambiarIdioma(idioma) {
//   var textoContacto = document.querySelectorAll("footer p")[0];
//   var textoCorreo = document.querySelectorAll("footer p")[1];
//   var textoAcercaDe = document.querySelector("footer div:nth-of-type(2) p");

//   if (idioma === "es") {
//     textoContacto.textContent = textoContactoEsp;
//     textoCorreo.textContent = textoCorreoEsp;
//     textoAcercaDe.textContent = textoAcercaDeEsp;
//   } else {
//     textoContacto.textContent = textoContactoIng;
//     textoCorreo.textContent = textoCorreoIng;
//     textoAcercaDe.textContent = textoAcercaDeIng;
//   }
// }

const adres = document.getElementById("footer-es");
const adren = document.getElementById("footer-en");
function cambiarIdiomaf(idioma) {
  if (idioma === "es") {
    adres.classList.remove("footer-show");
    adren.classList.add("footer-show");
  } else {
    adres.classList.add("footer-show");
    adren.classList.remove("footer-show");
  }
}
