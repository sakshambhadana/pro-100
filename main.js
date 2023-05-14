var SpeechRecognition=window.webKitSpeechRecognition;
var recognition = new SpeechRecognition();

function captureStart(){
    recognition.start();
}
recognition.onresult=function(event){
    console.log(event);

    var content = event.results[0][0].transcript;
    
   if(content == "selfie"){

        speak();

   }

}

camera =  document.getElementById("camera");
Wedcam.set({
  
  width:550,
  height:420,
  image_format:'jpeg',
  jpeg_quality:90,


});

function speak(){
 var synth = window.speechSynthesis;
 Webcam.attach(camera);
 
 speak_data = "Taking your next Selifie in 5 second";
 var uttarThis = new SpeechSynthesisUtterance(speak_data);
 synth.speak(uttarThis);

  setTimeout(function (){
    img_id = "selfie1";
    take_snapshot();
    speak_data = "Taking your next selfie in 10 second";
    var uttarThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(uttarThis);
  }, 5000);
 
  setTimeout(function (){
    img_id = "selfie2";
    take_snapshot();
    speak_data = "Taking your next selfie in 15 second";
    var uttarThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(uttarThis);
  }, 5000);
 
  setTimeout(function (){
    img_id = "selfie3";
    take_snapshot();
    speak_data = "Taking your next selfie in 10 second";
    var uttarThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(uttarThis);
  }, 10000);

  setTimeout(function (){
    img_id = "selfie3";
    take_snapshot();
   }, 15000);
}