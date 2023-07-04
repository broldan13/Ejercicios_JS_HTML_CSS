const doc=document;

export default function sliderCarrusel(){
    const $btnBack=doc.querySelector(".btns-sliders .back"),
        $btnNext=doc.querySelector(".btns-sliders .next"),
        $slides=doc.querySelectorAll(".slide-slides");
        
    let contador=0;
   

    doc.addEventListener("click",(e)=>{

        if (e.target===$btnBack){
            //Prevenir el comportamiento por defecto y no se regrese arriba
            (e).preventDefault();
            $slides[contador].classList.remove("active");
            contador=contador-1;
            if(contador<0){
                contador=$slides.length-1;
            }
            $slides[contador].classList.add("active");
        };

        if (e.target===$btnNext){
            (e).preventDefault();
            $slides[contador].classList.remove("active");
            contador=contador+1;

            if (contador >= $slides.length){
                contador=0;
            }
            $slides[contador].classList.add("active");
        };
    });
};