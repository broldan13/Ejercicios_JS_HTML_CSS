const doc=document,
    locS=localStorage;

export default function themeDark(btn,classDark){
    //Declarar el boton para el DOM
    const $btnMode=doc.querySelector(btn),
        //Variable que buscara al data-dark en el html
        $serchSelector=doc.querySelectorAll("[data-dark]");

    //Declaración de las variables para los iconos
    let sun="☀️",
        moon="🌙";

    //Función modo claro
    const modeLight=()=>{
        $serchSelector.forEach((el) => el.classList.remove(classDark));
        $btnMode.textContent=moon;
        locS.setItem("theme","light");
    }

    //Función modo obscuro
    const modeDark=()=>{
        $serchSelector.forEach((el) => el.classList.add(classDark));
        $btnMode.textContent=sun;
        locS.setItem("theme","dark");
    }
    
    //Definición del tipo de evento
    doc.addEventListener("click",(e)=>{
        //Condicional del evento según el click
        if (e.target.matches(btn)){
            //Condicion aplicada al tipo de icono segun luna (aplicara el modo obscuro)
            if ($btnMode.textContent===moon){
                //segun los elementos del html que tengan el data-dark, se iterarn con el for each y se le agregaran las clases 
                modeDark();
            //Función aplicada al tipo de icono segun sol (aplicara el modo claro)
            }else{
                modeLight();
            };
        };
    });

    doc.addEventListener("DOMContentLoaded",(e)=>{
        if (locS.getItem("theme")===null)locS.setItem("theme","light");
        if (locS.getItem("theme")=== "light") modeLight();
        if (locS.getItem("theme")=== "dark") modeDark();
    });

}