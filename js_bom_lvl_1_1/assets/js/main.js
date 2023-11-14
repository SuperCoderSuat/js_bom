// function zeigeTextNachZeit(text, sekunden) {

//     console.log("Start Warten für 3 Sekunden...");

//     setTimeout(function() {

//         console.log(text);

//     }, sekunden * 1000); // setTimeout erwartet Millisekunden, daher Sekunden * 1000

// }

// zeigeTextNachZeit("Erledigt. Du hast 3 Sekunden verschwndet!", 3);


// const zeigeTextNachZeit = (text, sekunden) => {

//     console.log("Start Warten für 3 Sekunden...");

//     setTimeout(() => {

//         console.log(text);

//     }, sekunden * 1000);

// }

// zeigeTextNachZeit("Erledigt. Du hast 3 Sekunden verschwndet!", 3);


function countdown() {

    let zahl = 10;

    const interval = setInterval(function() {
        if (zahl > 0) {

            console.log(zahl);
            zahl--;

        } else {

            clearInterval(interval);
            console.log("Fertig!");

        }
    }, 1000);
}

countdown();

