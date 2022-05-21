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
    secondsSphere.style.animationPlayState = 'paused'; //cambiamos la animación de la pelotita a pausa
    clearInterval(stopwatchInterval);                   //borramos el intervalo
}

const stop = () => {
    secondsSphere.style.transform = 'rotate(-90deg) translateX(60px)'; // Estilos: volvemos a poner la pelotita arriba de todo
    secondsSphere.style.animation = 'none';                             //le sacamos la animación
    playPauseButton.classList.remove('running');                           // se pone el boton de play..sacamos el de pausa
    runningTime = 0;                                                      //volvemos a running a cero
    clearInterval(stopwatchInterval);                                   //frenamos el intervalo
    stopwatch.textContent = '00:00';                                    //le ponemos el texto 00:00
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

const calculateTime = runningTime => {            //la función calculateTime va a recibir runningTime
    const total_seconds = Math.floor(runningTime / 1000);  //segundos totales 
    const total_minutes = Math.floor(total_seconds / 60);  //minutos totales; segundos totales / 60;

    const display_seconds = (total_seconds % 60).toString().padStart(2, "0"); //para mostrarlos, cuando llega a 60 seg (modulo 60) llega a 0
    const display_minutes = total_minutes.toString().padStart(2, "0");  // padStart(2, "0"):::: esto es para q aparezca un cero delanta y no aparezca solo un numero ej: 01, 08 y no 1 , 8.9
                                                                        //no se hace módulo con los minutos para q lleguen a la cantidad q sea
    return `${display_minutes}:${display_seconds}`
}