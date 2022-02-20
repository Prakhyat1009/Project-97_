function convert(){
var synth = window.speechSynthesis;

text = document.getElementById("textbox").value;
reap_text= new SpeechSynthesisUtterance(text);
synth.speak(reap_text);


}

function home3(){
    window.location="index.html";
    }

    function clearout(){
        document.getElementById("textbox").value="";
    }