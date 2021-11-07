window.onload = function() {

    var seconds = 00;  // Variável para os SEGUNDOS.
    var tens = 00;  // Variável para os MILISSEGUNDOS.
    var appendSeconds = document.getElementById("seconds");
    var appendTens = document.getElementById("tens");
    var buttonStart = document.getElementById("button-start");
    var buttonStop = document.getElementById("button-stop");
    var buttonReset = document.getElementById("button-reset");
    var interval;

    buttonStart.onclick = function() {
        clearInterval(interval);
        interval = setInterval(startTimer, 10);
    }

    buttonStop.onclick = function() {
        clearInterval(interval);
    }

    buttonReset.onclick = function() {
        clearInterval(interval);  // O clearInterval() é um método global cancela uma ação cronometrada e repetitiva que foi previamente estabelecida por uma chamada para setInterval().
        tens = "00";
        seconds = "00";

        appendSeconds.innerHTML = seconds;
        appendTens.innerHTML = tens;

    }

    function startTimer() {
        tens++;

        if(tens <= 9) {
            appendTens.innerHTML = "0" + tens;  // Adicionando um 0 à esquerda do milissegundo, enquanto este ele for menor ou igual a 9. Exemplo: 09
        }

        if(tens > 9) {
            appendTens.innerHTML = tens;
        }

        if(tens > 99) {
            console.log("seconds");
            seconds++;
            appendSeconds.innerHTML = "0" + seconds;  // Adicionando um 0 à esquerda do segundo.
            tens = 0;
            appendTens.innerHTML = "0" + 0;  // Adicionando um 0 à esquerda do segundo. Exemplo: 00.
        }

        if(seconds > 9) {
            appendSeconds.innerHTML = seconds;
        }
    }

}