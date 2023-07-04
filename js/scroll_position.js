//Declaración de la variable document
const doc=document;
//Exportación de la función al index.js
export default function scrollPosition(){
    //Selección de los elementos con el data-scroll-spy
    const $sections=doc.querySelectorAll("section[data-scroll-spy]");
    //declaración de la callBack
    const cb=(entradas)=>{
        
        entradas.forEach((entrada)=>{

            const id = entrada.target.getAttribute("id");

            entrada.isIntersecting
            ? doc.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.add('active')
            : doc.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.remove('active');
            
        });
    };
    const observerPosition = new IntersectionObserver(cb,{
        //root
        //rootMargin:"-50%"
        threshold:[0.5 ,0.75]
    });
    $sections.forEach((elemento) => observerPosition.observe(elemento));
};

