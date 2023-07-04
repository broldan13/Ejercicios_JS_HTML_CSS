const doc=document;

export default function luckDigital(btn,selector){

    /* ---------------Solución 1 ------------------------- */
    
    doc.addEventListener("click",(e)=>{
        if(e.target.matches(btn)){
            const $player=doc.querySelectorAll(selector), 
                winner= $player[Math.floor(Math.random() * $player.length)];

            alert(`El ganador es: ${winner.textContent}`);
        }
    })

   /*-----------------Solución 2----------------------------

    doc.addEventListener("click",(e)=>{
        if(e.target.matches(btn)){

            let $players=doc.querySelectorAll(selector),
                random=Math.floor(Math.random()*$players.length),
                winner=$players[random];


                alert(winner.textContent);

        };
    });*/

    /*--------------------Solución 3----------------------------------
   
    const determinedWinner=(selector)=>{

        const $player = doc.querySelectorAll(selector),
            random = Math.floor(Math.random() * $player.length),
            winner = $player[random];

            console.log($player,random,winner);

            return `Ganador: ${winner.textContent} `;
    };

    doc.addEventListener("click",(e)=>{
        if(e.target.matches(btn)){

            let resultWinner = determinedWinner(selector);
            alert(resultWinner);

        };
    });*/

};