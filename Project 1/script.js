const talkButton = document.getElementById('talk');
const responseElement = document.getElementById('response');

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function() {
    console.log('Voice recognition started.');
    responseElement.textContent = 'Listening...';
};

recognition.onresult = function(event) {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    responseElement.textContent = `You said: ${transcript}`;
    handleVoiceCommand(transcript.toLowerCase());
};

talkButton.addEventListener('click', () => {
    recognition.start();
    
});

function handleVoiceCommand(command) {
    const synth = window.speechSynthesis;
    let response = '';

    if (command.includes('hello jarvis')) {
        response = 'Hello! How may i help you sir?';

    }
    else if (command.includes('hello')) {
        response = 'Hello, Jarvis this side! How may i help you sir?';
        alert = ("Nice to meet you")
    }
     else if (command.includes('how are you')) {
        response = 'I am Good, How are you? Do you need some help? ';
    }
     else if (command.includes('open google')) {
        response = 'Opening Google.';
        window.open('https://www.google.com', '_blank');
    }
     else if (command.includes('open youtube')) {
        response = 'Opening Youtube.';
        window.open('https://www.youtube.com', '_blank');
    } 
    else if (command.includes('play illuminati')) {
        response = 'Playing Illuminati song.';
        window.open('https://www.youtube.com/watch?v=tOM-nWPcR4U', '_blank');
    }
    else if (command.includes('play arma')) {
        response = 'Playing Aaarrmmaadham Song';
        window.open('https://www.youtube.com/watch?v=HkvVaj_28C8', '_blank');
    }
     else if (command.includes('play songs')) {
        response = 'Playing Chandu Champion: Satyanaas.';
        window.open('https://www.youtube.com/watch?v=CJ5VaHGvcEg', '_blank');
    }
    else if (command.includes('play dabang')) {
        response = 'Playing Huuuud Huuuud Daabaang Song';
        window.open('https://www.youtube.com/watch?v=D6AZzOIO7wE', '_blank');
    } 
    else if (command.includes('play a song for friend')) {
        response = 'Playing nach meri jaan.';
        window.open('https://www.youtube.com/watch?v=gwa2Os2LbRA', '_blank');
    }
    else if (command.includes('tell me something about yourself')) {
        response = 'Hello! I am Jarvis. I was created by Neel Rathod. I can perform some small tasks like redirecting to google, youtube, chat GPT, youtube songs.Even i can respond for some quetions and i will answer those if it is in the system, etc.';
    }








    
    else if (command.includes('open chat gpt') || command.includes('chat gpt') || command.includes('start gpt')) {
        response = 'Chat GPT opening';
        window.open('https://chatgpt.com/', '_blank')
    }
    else if (command.includes('open whatsapp') || command.includes('whatsapp') || command.includes('whatsup')) {
        response = 'Whatsapp opening';
        window.open('https://web.whatsapp.com/', '_blank');
    }
    else if (command.includes('open project 2') || command.includes('open quiz website') || command.includes('my quiz website')) {
        response = 'Opening Your new project of Quiz Website';
        window.open('file:///C:/Users/Dell/Downloads/VS%20code%201/Project%202/index.html', '_blank');
    }
    else if (command.includes('open project 3') || command.includes('open my family cube') || command.includes('my family cube')) {
        response = 'Opening Your new project of Your Family Cube';
        window.open('file:///C:/Users/Dell/Downloads/VS%20code%201/Project%203/index.html', '_blank');
    }
    else if (command.includes('open chat gpt') || command.includes('chat gpt') || command.includes('start gpt')) {
        response = 'Chat GPT opening';
    }
    
    else {
        response = 'I did not understand that. Can you please repeat?';
    }

   

    responseElement.textContent = response;

    const utterThis = new SpeechSynthesisUtterance(response);
    const voices = synth.getVoices();
    const femaleVoice = voices.find(voice => voice.name.includes('Google UK English Female')); 
    utterThis.rate = 0.8; // Adjust this value to change the speech speed
    synth.speak(utterThis);
}
    /***************Redirect to files**************/

