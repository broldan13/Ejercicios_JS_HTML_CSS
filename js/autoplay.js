//Declaración de variables para DOCUMENT Y WINDOW
const doc = document,
    win= window;
//Exportación de la fincuón al index.js
export default function autoplayVideo(){
    //Selección de los elementos de video con el Data attribuet
    const $videos=doc.querySelectorAll("video[data-video-autoplay]"),
    //Declaración de la callback o función para el observer
        cb=(entries)=>{
            //Recorrido de cada entreda (video) con un forEach
            entries.forEach(entry=>{
                //Condicional para reproducir cuando se muestre cierto procentaje de video
                entry.isIntersecting
                    ? entry.target.play()
                    : entry.target.pause();
                //Nuevo evento de Windows para comprobar la visibilidad de la pagina
                win.addEventListener("visibilitychange",(e)=>{
                //Condición de visibilidad con Document
                    doc.visibilityState==="visible"
                        ? entry.target.play()
                        : entry.target.pause();
                });
            });
        };
    //Declaración del observer
    const observer= new IntersectionObserver(cb,{threshold:0.5});
    //Ejecución de la función observer con cada elemento (video) con un forEach
    $videos.forEach(elem=>observer.observe(elem));

}