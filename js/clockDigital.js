const doc = document;

export function digitalClock(clock,btnInit,btnStop){

    let timeHour;
    doc.addEventListener("click",(e)=>{
        if(e.target.matches(btnInit)){
            timeHour=setInterval(()=>{
                let newHour = new Date().toLocaleTimeString();
                doc.querySelector(clock).innerHTML=`<h2>${newHour}</h2>`;
            },1000);

            e.target.disabled=true;
        };

        if(e.target.matches(btnStop)){
            clearInterval(timeHour);
            doc.querySelector(clock).innerHTML=null;
            doc.querySelector(btnInit).disabled=false;
        };
    });
};

export function alarm(audio,btnInit,btnStop){
    
    let active;

    const $alarm=doc.createElement("audio");
    $alarm.src=audio;
   

    doc.addEventListener("click",e=>{
        if(e.target.matches(btnInit)){
            active = setTimeout(()=>{
                $alarm.play();
            },1000);
            e.target.disabled=true;
        };

        if (e.target.matches(btnStop)){
            clearTimeout(active);
            //Pausa el audio
            $alarm.pause();
            //Regresa a 0 el audio
            $alarm.currentTime=0;
            //Volver a activar el botón 
            doc.querySelector(btnInit).disabled=false;
        };
    });
};