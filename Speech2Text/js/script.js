let input = document.querySelector(".inputBx input"),
    btn = document.querySelector(".inputBx .icon"),
    icon = document.querySelector(".inputBx .icon i"),
    SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
    
if (SpeechRecognition){
    console.log("supported");
    let recognition = new SpeechRecognition();
	recognition.lang = "ar-SA";
    btn.addEventListener("click",()=> {
        if (icon.classList.contains('fa-microphone')){
            recognition.start();
        }
        else{
            recognition.stop()
        }
    })
    recognition.addEventListener("start",()=>{
        icon.classList.replace("fa-microphone","fa-microphone-slash");
    })
    recognition.addEventListener("end",()=>{
        icon.classList.replace("fa-microphone-slash","fa-microphone");
    })
    recognition.addEventListener("result",(event)=>{
        let transcript = event.results[0][0].transcript;
        input.value = transcript;
    })
}
else{
    console.log("not supported");
}
