const stopwatch = document.getElementById('stopwatch');
const playPauseButton = document.getElementById('play-pause');
const secondsSphere = document.getElementById('seconds-sphere');

let stopwatchInterval;
let runningTime = 0;

const playPause = () => {
    const isPaused = !playPauseButton.classList.contains('running');
    if (isPaused) {   //si está pausado
        playPauseButton.classList.add('running');  //hacemos q arranque, en el CSS tenemos la class .running
        start();
    } else {
        playPauseButton.classList.remove('running');  //le sacamos el running y lo pausamos con la función
        pause();
    }
}

const pause = () => {

}
const start = () => {
    secondsSphere.style.animation = 'rotacion 60s linear infinite'; //la pelotita
    let startTime = Date.now() - runningTime; //la 1era vez q se hace play es los milisegundos del momento (Date.now)-runningTime q en el inicio es 0
    secondsSphere.style.animationPlayState =  'running';  //sobreescribimos el pausado del CSS
    stopwatchInterval = setInterval( () => {
        runningTime = Date.now() - startTime;  //calculamos cuanto tiempo pasó
        stopwatch.textContent = calculateTime(runningTime);  //al elemento stopwatch le vamos a cambiar el contenido con la funcion calculateTime
    }, 1000) //actualizamos el cronómetro cada 1segundo (1000)
}

const calculateTime = runningTime => {
    
}