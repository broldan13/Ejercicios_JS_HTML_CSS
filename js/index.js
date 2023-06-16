import menuHamburger from "./menuHamburger.js";
import { cronometroTime, contadorRegresivo } from "./cronometro.js";
import { digitalClock,alarm } from "./clockDigital.js";
import { shortcuts,moveCircle } from "./teclado.js";

const doc=document;

doc.addEventListener("DOMContentLoaded",(e)=>{
    menuHamburger(".btn-panel",".panel",".menu a");
    digitalClock("#clock","#inicio-reloj","#detener-reloj");
    alarm("assets/akatsuki.mp3","#inicio-alarma","#detener-alarma");
    cronometroTime(".cronometro");
    contadorRegresivo(".cronometro2")
});
//keydown funciona al precionar la tecla
doc.addEventListener("keydown",e=>{
    shortcuts(e);
    moveCircle(e,".circle",".square")
});        
/*
//funciona al soltar la tecla
doc.addEventListener("keyup",e=>{
    shortcuts(e);
});
//Funciona al dejar precionada la tecla
doc.addEventListener("keypress",e=>{
    shortcuts(e);
});*/




