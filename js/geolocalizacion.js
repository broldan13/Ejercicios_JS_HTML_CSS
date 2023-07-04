const doc=document,
    n=navigator;

export default function geoLocation(id){
    //Para manejar el id del div del DOM
    const $id = doc.getElementById(id);
    //Objeto de opciones para la geolocalización
    let opcion={
        enableHighAccuracy:true,
        timeout:3000,
        maximumAge:0,
    };
    //Caso de correcto de permisos de la ubicación
    const sucessful=(position)=>{
        //console.log(position);
        //Declaración de la variable coords para la longitud y latitud
        let coords=position.coords;
        //Inyección de codigo html al div según su id
        $id.innerHTML=
            `<p><mark>Tu posición es: </mark></p>
             <ul>
                <li><b>Latitud:</b> ${coords.latitude} </li>
                <li><b>Longitud:</b> ${coords.longitude} </li>
                <li><b>Presición:</b> ${coords.accuracy} metros. </li>
                <br><br>
                <p>Click para ver tu ubicación</p>
                <a href="https://www.google.com/maps/@${coords.latitude},${coords.longitude},15z" target="_blank" rel="noopener">Ver en Google Maps</a>
             </ul>`
        ;

    };
    //Caso de error 
    const error=(err)=>{
        $id.innerHTML=
        `
        <p><mark>Se detecto el siguiente error: ${err.code}: ${err.message} </mark></p>
        `;

    }
    //Recibe 3 parametros(En caso de ser correcto, En caso de erros, y las opciones)
    n.geolocation.getCurrentPosition(sucessful,error,opcion);

}