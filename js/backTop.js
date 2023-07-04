const doc=document;
const win=window;
//Funcion que permite que aparezca o desaparezca el boton
export function scrollTop(btnBack){
    const $scrollBtn=doc.querySelector(btnBack);

    win.addEventListener("scroll",(e)=>{
        let position=doc.documentElement.scrollTop;

        if (position>500){
            $scrollBtn.classList.remove("hidden");
        }else{
            $scrollBtn.classList.add("hidden");
        }
    });
    //Evento que permite regresar
    win.addEventListener("click",(e)=>{

        if(e.target.matches(btnBack)){
            win.scroll({
                behavior:"smooth",
                top:0
            });
        }
    });
}