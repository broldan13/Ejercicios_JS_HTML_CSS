const d = document,
    w = window;

export default function textConvert(){
    const $selectConvert = d.getElementById("converter-text"),
        $textArea = d.getElementById("converter-textArea"),
        $btnConvert = d.getElementById ("converter-btn"),
        speechText = new SpeechSynthesisUtterance();
        
        let voices = [];

    d.addEventListener("DOMContentLoaded",(e)=>{
        w.speechSynthesis.addEventListener("voiceschanged",(e)=>{
            //console.log(e);
            voices=w.speechSynthesis.getVoices();
            //console.log(voices);

            voices.forEach(voice=>{
                const $option = d.createElement("option");
                $option.value = voice.name;
                $option.textContent = `${voice.name}-${voice.lang}`;

                $selectConvert.appendChild($option);
            });
        })
    });
    d.addEventListener("change", e=>{
        if(e.target===$selectConvert){
            speechText.voice=voices.find(voice=>voice.name===e.target.value);
        }
    });
    d.addEventListener("click",e=>{
        if (e.target===$btnConvert){
            speechText.text = $textArea.value;
            w.speechSynthesis.speak(speechText);
        }
    });


};