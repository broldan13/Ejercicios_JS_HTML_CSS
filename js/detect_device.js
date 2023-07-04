const doc=document,
    n=navigator,
    //Brinda cierta información del navegador y dispositivo
    userA=n.userAgent;

export default function deviceInfo(id){
    const $id =doc.getElementById(id),

        isMovile={
            android:()=>userA.match(/android/i),
            ios:()=>userA.match(/iphone|ipad|ipod/i),
            windows:()=>userA.match(/windows phone/i),
            any:function(){
                return this.android()||this.ios()||this.windows();
            },
        },
        isPC={
            linux:()=>userA.match(/linux/i),
            windows:()=>userA.match(/windows nt/i),
            mac:()=>userA.match(/mac os/i),
            any: function(){
                return this.linux()||this.windows()||this.mac();
            },
        },

        isBrowser={
            edge:()=>userA.match(/edga/i),
            chrome:()=>userA.match(/chrome/i),
            brave:()=>userA.match(/brave/i),
            safari:()=>userA.match(/safari/i),
            firefox:()=>userA.match(/firefox/i),
            iexplorer:()=>userA.match(/msie|iemobile/i),
            any:function(){
                return (this.edge()||this.chrome()||this.safari()||this.firefox()||this.iexplorer());
            },
        };

    $id.innerHTML= `
        <ul>
            <li>${userA}</li>
            <br>
            <br>
            <li>Sistema Operativo: ${isMovile.any()?isMovile.any():isPC.any()}</li>
            <li>Navegador: ${isBrowser.any()}</li> 
        </ul> `;
    if (isBrowser.chrome()){
        $id.innerHTML+=`
        <mark>Bienvenido a tu navegador Chrome </mark>`;
    };

    //Redirecciones
    if (isMovile.android()) window.location.href="https://www.youtube.com/watch?v=6KbFhH3LI_M";
};