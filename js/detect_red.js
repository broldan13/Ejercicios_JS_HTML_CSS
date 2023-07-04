const doc = document,
    win=window,
    n= navigator;

export default function detectConection (){
    const inStatus=()=>{
        let $div=doc.createElement("div");

        if (n.onLine){
            $div.textContent="Conexión Establecida";
            $div.classList.add("online");
            $div.classList.remove("offline");
        }else{
            $div.textContent="Sin conexión a Internet";
            $div.classList.add("offline");
            $div.classList.remove("online");
        };
        doc.body.insertAdjacentElement("afterbegin",$div);
        setTimeout(()=>{
            doc.body.removeChild($div);
        },1000);
    };

    win.addEventListener("online",(e)=>{
        inStatus();
    });

    win.addEventListener("offline",(e)=>{
        inStatus();
    });
};