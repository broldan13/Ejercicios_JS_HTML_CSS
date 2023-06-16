const doc=document;
let x=0,
    y=0;

export function moveCircle(e,circle,square){
    const $circle=doc.querySelector(circle),
        $square=doc.querySelector(square),
        //Limites del cuadro
        limitCircle=$circle.getBoundingClientRect(),
        limitSquare=$square.getBoundingClientRect();

    switch (e.keyCode) {
        case 37:
            if(limitCircle.left > limitSquare.left){
                e.preventDefault();
                x--;
            }
            break;

        case 38:
            if(limitCircle.top > limitSquare.top){
                e.preventDefault();
                y--;
            }
            break;

        case 39:
            if(limitCircle.right<limitSquare.right){
                e.preventDefault();
                x++;
            }
            break;
        case 40:
            if(limitCircle.bottom < limitSquare.bottom){
                e.preventDefault();
                y++;
            }
            break;
    
        default:
            break;
    }
    $circle.style.transform=`translate(${x*50}px,${y*50}px)`;     
}

export function shortcuts (e){
    /*console.clear();
    console.log(e.type);
    //Clave de la tecla
    console.log(e.key);
    //Codigo de la tecla/dado por las computadoras
    console.log(e.keyCode);
    console.log(e.ctrlKey);
    console.log(e.altKey);
    console.log(e.shiftKey);
    console.log(e);*/

    if(e.key==="a" && e.altKey){
        alert("Presionaste el comando de alerta (ALT + A)");
    }

    if(e.key==="c" && e.altKey){
        confirm("Has precionado el comando de conformación (SHIFT + C)");
    }

    if (e.key==="p"&& e.altKey){
        prompt("Has precionado el comando de prompt (SHIFT + P)");
    }

};

