const doc=document,
    win=window;

export default function responsiveMedia(id,mQry,contDesk,contMobile){

    let pointsLed=win.matchMedia(mQry);

    let responsive=(e)=>{
        if (e.matches){
            doc.getElementById(id).innerHTML=contDesk;
        }else{
            doc.getElementById(id).innerHTML=contMobile;
        
    }
 }
 pointsLed.addListener(responsive);
 responsive(pointsLed);
}