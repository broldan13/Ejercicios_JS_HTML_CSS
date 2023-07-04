const d = document;

export default function contactFormValidations() {
    const $form = d.querySelector(".contact-form"),
        $inputs = d.querySelectorAll(".contact-form [required]");

    // console.log($inputs);

    $inputs.forEach((input) => {
        const $span = d.createElement("span");
        $span.id = input.name;
        $span.textContent = input.title;
        $span.classList.add("contact-form-error", "none");
        input.insertAdjacentElement("afterend", $span);

    });

    //Mostrar efectos de secciones invalidas
     d.addEventListener("keyup",(e)=>{

        if (e.target.matches(".contact-form [required]")){

            const $input =  e.target,
            pattern = $input.pattern || $input.dataset.pattern;

            if(pattern && $input.pattern || $input.dataset.pattern){
                //Contruir la Expresión regular para validación 
                const regEx= new RegExp(pattern);
                return !regEx.exec($input.value)
                    ? d.getElementById($input.name).classList.add("is-active")
                    : d.getElementById($input.name).classList.remove("is-active");
            };

            if (!pattern){
                return $input.value === ""
                ? d.getElementById($input.name).classList.add("is-active")
                : d.getElementById($input.name).classList.remove("is-active");
            };
        };
        

     });


    // Eventos de carga y emisión de respuesta por parte del dormulario
    d.addEventListener("submit", (e) => {
        //e.preventDefault();
        //Declaración de las respuesta de enviado y loading...
        const $loading = d.querySelector(".form-contac-loader"),
                $reply = d.querySelector(".reply-form");
        //Se remueve la clase none que es la que oculta los elementos
        $loading.classList.remove("none");
        //SetTimeout para que se ejecute cada cierto tiempo
        setTimeout(()=>{
            //Se quitan y se agregam las clases según queremos lo que se muestre 
            $loading.classList.add("none");
            $reply.classList.remove("none");
            //setTimeout interno para volver a ocultar la respuesta dado un cierto tiempo
            setTimeout(()=>{
                $reply.classList.add("none");
            },1500);

        },2000);
        
    });

    
}