const doc=document;

export default function searchFilter(input,selector){
    //Agregar nuevo evento de teclado
    doc.addEventListener("keyup",(e)=>{
        //Condición de evento de entrada según la clase
        if(e.target.matches(input)){
            //Tecla de salida
            if (e.key==="Escape")e.target.value="";
            //Busqueda de los lecectores con la clase con ciclo forEach
            doc.querySelectorAll(selector).forEach(elem=>{
                //Condición si incluye las palabras
                if(elem.textContent.toLowerCase().includes(e.target.value)){
                    //Si las incluye remuelve el estilo filter
                    elem.classList.remove("filter");
                }else{
                    //Si no coincide remueve el estilo filter
                    elem.classList.add("filter");
                };
            });
        };
    });
};