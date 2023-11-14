document.addEventListener('DOMContentLoaded', function() {
    startCountdown();
});

function startCountdown() {

    let countdown = 10;

    const countdownDisplay = document.getElementById('count');
    const houdini = document.querySelector('.message');

    const interval = setInterval(function() {
        if (countdown > 0) {

            countdownDisplay.innerText = countdown;
            countdown--;
            
        } else {

            clearInterval(interval);
            houdini.style.display = 'none'; 

        }
    }, 1000); 
}