window.onload = ()=>{
    var seconds=0;
    var milliseconds=0;
    var stopwatchHead=document.getElementById("stopwatch");
    var appendSecs=document.getElementById("seconds");
    var appendMilliSecs=document.getElementById("milliseconds");
    var btnStart=document.getElementById("start");
    var btnStop=document.getElementById("stop");
    var btnReset=document.getElementById("reset");
    var alert=document.getElementById("alert");
    var interval;
    var startButton = document.getElementById('voicestart');
    var outputDiv = document.getElementById('output');
    
    
    var recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();
    recognition.lang = 'en-US';
    
    recognition.onstart = () => {
        startButton.textContent = '...';
    };
    
    recognition.onresult = (event) => {
        var transcript = event.results[0][0].transcript;
        outputDiv.innerHTML = transcript;
        var userVoiceInp=transcript;
        var userVoice=userVoiceInp.toLowerCase();
        const startArray=["start","start pannu","start karo","start timer"]
        const stopArray=["stop","stop pannu","stop karo","stop timer"]
        const resetArray=["reset","reset pannu","reset karo","reset timer"]
        var startRes=startArray.find(startInp => startInp===userVoice)
        var stopRes=stopArray.find(stopInp => stopInp===userVoice)
        var resetRes=resetArray.find(resetInt => resetInt===userVoice)
        if(startRes){
            clearInterval(interval);
            interval=setInterval(myTimer,10);
            alert.innerHTML="Your countdown started👍";
            stopwatchHead.style.color="#80C342";
        }
        if(stopRes){
            clearInterval(interval);
            alert.innerHTML="Oops...It is stopped...click start to continue❤️";
            stopwatchHead.style.color="red";
        }
        if(resetRes){
            clearInterval(interval);
            seconds="00";
            milliseconds="00";
            appendSecs.innerHTML=seconds;
            appendMilliSecs.innerHTML=milliseconds;
            alert.innerHTML="Ok..Lets start again❤️...click start button...👍";
            stopwatchHead.style.color="#F294B6";
        }
    }
        

    
    recognition.onend = () => {
        startButton.textContent = '🎙️';
    };
    
    startButton.addEventListener('click', () => {
        recognition.start();
    });
    btnStart.onclick=()=>{
        clearInterval(interval);
        interval=setInterval(myTimer,10);
        alert.innerHTML="Your countdown started👍";
        stopwatchHead.style.color="#80C342";
    }
    btnStop.onclick=()=>{
        clearInterval(interval);
        alert.innerHTML="Oops...It is stopped...click start to continue❤️";
        stopwatchHead.style.color="red";
    }
    btnReset.onclick=()=>{
        clearInterval(interval);
        seconds="00";
        milliseconds="00";
        appendSecs.innerHTML=seconds;
        appendMilliSecs.innerHTML=milliseconds;
        alert.innerHTML="Ok..Lets start again❤️...click start button...👍";
        stopwatchHead.style.color="#F294B6";
    }

    function myTimer(){
        milliseconds++;
        if(milliseconds<=9){
            appendMilliSecs.innerHTML="0"+milliseconds;
        }
        if(milliseconds>9){
            appendMilliSecs.innerHTML=milliseconds;

        }
        if(milliseconds>99){
            seconds++;
            appendSecs.innerHTML="0"+seconds;
            milliseconds=0;
            appendMilliSecs.innerHTML="0"+milliseconds;
        }
        if(seconds>9){
            appendSecs.innerHTML=seconds;
        }
    }
    

}
