import menuHamburger from "./menu_hamburguesa.js";
import themeDark from "./tema_dark.js";
import { cronometroTime, contadorRegresivo } from "./cronometro.js";
import { digitalClock,alarm } from "./clockDigital.js";
import { shortcuts,moveCircle } from "./teclado.js";
import { scrollTop } from "./backTop.js";
import responsiveMedia from "./responsive_media.js";
import responsiveTest from "./test_responsive.js";
import deviceInfo from "./detect_device.js";
import detectConection from "./detect_red.js";
import webCam from "./web_cam.js";
import geoLocation from "./geolocalizacion.js";
import searchFilter from "./search_filter.js";
import luckDigital from "./sorteo.js";
import sliderCarrusel from "./carrusel.js";
import scrollPosition from "./scroll_position.js";
import autoplayVideo from "./autoplay.js";
import validationForm from "./validatiosForm.js";
import contactFormValidations from "./validatiosForm.js";
import textConvert from "./convert_text.js";

const doc=document;

doc.addEventListener("DOMContentLoaded",(e)=>{
    menuHamburger(".btn-panel",".panel",".menu a");

    digitalClock("#clock","#inicio-reloj","#detener-reloj");

    alarm("assets/akatsuki.mp3","#inicio-alarma","#detener-alarma");

    cronometroTime(".cronometro");

    contadorRegresivo(".cronometro2");

    scrollTop(".btn-back-top");

    responsiveMedia("youtube",
    "(min-width: 1024px)",
    `<iframe width="560" height="315" src="" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> `,
    `<a href="https://www.youtube.com/watch?v=zU1AbQeqmXg" target="_blank" rel="noopener">Ver Video</a>`);

    responsiveMedia("maps",
    "(min-width: 1024px)",
    `<iframe src=""></iframe> `,
    `<a href="https://goo.gl/maps/hi8qMGb4584R2jTu7" target="_blank" rel="noopener">Ver Mapa</a>`);

    responsiveTest("responsive-tester");

    deviceInfo("user-device");

    webCam("web-cam");

    geoLocation("geolocation");

    searchFilter(".filter-card",".card");

    luckDigital("#btn-sorteo",".player");

    sliderCarrusel();

    scrollPosition();

    autoplayVideo(); 

    contactFormValidations();

});

themeDark(".btn-mode","dark-mode");

detectConection();

//keydown funciona al precionar la tecla
doc.addEventListener("keydown",e=>{
    shortcuts(e);
    moveCircle(e,".circle",".square")
});     

textConvert();
/*
//funciona al soltar la tecla
doc.addEventListener("keyup",e=>{
    shortcuts(e);
});
//Funciona al dejar precionada la tecla
doc.addEventListener("keypress",e=>{
    shortcuts(e);
});*/




