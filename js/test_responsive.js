const doc=document;

export default function responsiveTest(id){
    const $formulario=doc.getElementById(id);

    let status;

    doc.addEventListener("submit",(e)=>{
        if (e.target.matches){
            e.preventDefault();
            status=window.open($formulario.direccion.value,"Status",`innerWidth=${$formulario.ancho.value}, innerHeight=${$formulario.alto.value}`);
        };
    });

    doc.addEventListener("click",(e)=>{
       if (e.target === $formulario.cerrar){
        status = status.close();
       };
    });
};