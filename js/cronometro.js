const doc=document;

export function cronometroTime(timeCronometro){

setInterval(()=>{

    const nextYear=new Date(`01/01/2024 0:01 AM`),
        yearActual= new Date(),
        timeRestante=nextYear-yearActual,
        //Representación del tiempo en milesegundos
        segundo = 1000,
        minuto = segundo * 60,
        hora = minuto * 60,
        dia = hora * 24;
    
    let mesReal=new Date().getMonth()-11*1,
        diaReal=Math.floor(timeRestante/dia),
        horaReal=new Date().getHours()-23*1,
        minutoReal=new Date().getMinutes()-60*1,
        segundoReal=new Date().getSeconds()-60;

        doc.querySelector(timeCronometro).innerHTML=`<h2>FALTAN: (${mesReal*-1} meses)  ${diaReal} dias ${horaReal*-1} horas ${minutoReal*-1} minutos ${segundoReal*-1} segundos. </h2>`;
    
  },1000);
};

export function contadorRegresivo(contadorTiempo){

    const newYear = new Date('01/01/2024 0:01 AM');

    const segundo = 1000,
        minuto = segundo * 60,
        hora = minuto * 60,
        dia = hora * 24;

    setInterval(()=>{
    
         const actualFecha = new Date(),
            tiempoRestante = newYear - actualFecha,
            diasRestantes = Math.floor(tiempoRestante / dia),
            horasRestantes = Math.floor((tiempoRestante % dia) / hora),
            minutosRestantes = Math.floor((tiempoRestante % hora) / minuto),
            segundosRestantes = Math.floor((tiempoRestante % minuto) / segundo);
    
            doc.querySelector(contadorTiempo).innerHTML=`<h2>FALTAN: ${diasRestantes} dias ${horasRestantes} horas ${minutosRestantes} minutos ${segundosRestantes} segundos. </h2>`;
    
    },1000);  
};




    






