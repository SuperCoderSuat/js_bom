function startCountdown() {

    let percentage = 100;

    const interval = setInterval(function() {

        if (percentage >= 0) {

                document.querySelector('#percentageDisplay').innerText = percentage + "%";

                percentage--;

            } else {

                clearInterval(interval);

            }
    }, 200);
    
}