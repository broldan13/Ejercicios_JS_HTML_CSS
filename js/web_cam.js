const doc=document,
    n=navigator;

export  default function webCam(id){
    const $video = doc.getElementById("web-cam");
    //Validación si cuenta con esta opción el navegador
    if(n.mediaDevices.getUserMedia){
        //navigator.mediaDevices.getUserMedia--> Es un objeto que valida si cuenta con esta opción el navegador.
        n.mediaDevices.getUserMedia({video:true,audio:true})
            //esto es una promesa por lo cual se usaran metodos de ellas.
        .then((stream)=>{
            $video.srcObject=stream;
            $video.play();
        }/*Para recibir todos los tados que arrojara nuestra web */)
        .catch((err)=>{
                $video.insertAdjacentHTML("beforebegin",
                `<p><mark> Se detecto el siguiente error ( ${err}) </mark></p>`
                );
            });
    };
};