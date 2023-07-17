const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const sectionReiniciar = document.getElementById('reiniciar')
const btnMascota = document.getElementById('btn-Mascota')
const btnFuego = document.getElementById('btn-fuego')
const btnAgua = document.getElementById('btn-agua')
const btnTierra = document.getElementById('btn-tierra')
const btnReiniciar = document.getElementById('btn-reiniciar')

const sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
const inputHipodoge = document.getElementById('Hipodoge')
const inputCapipepo = document.getElementById('Capipepo')
const inputRatigüeya = document.getElementById('Ratigüeya')
const spanNombreMascota = document.getElementById('nombreMascota')

const mascotaAleatorio = aleatorio(1,3)
const spanEnemy = document.getElementById('enemy')

const ataqueAleatorio = aleatorio(1,3)

const spanVidasJugador = document.getElementById('vidasJugador')
const spanVidasEnemigo = document.getElementById('vidasEnemigo')

const sectionMensajes = document.getElementById('resultado')
const ataqueDelJugador = document.getElementById('ataque-Jugador')
const ataqueDelEnemigo = document.getElementById('ataque-Enemigo')
const nuevoAtaqueJugador = document.createElement('p')
const nuevoAtaqueEnemigo = document.createElement('p')

const parrafo = document.createElement('p')

let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

function iniciarJuego() {
    sectionSeleccionarAtaque.style.display = 'none'
    sectionReiniciar.style.display = 'none'    
    btnMascota.addEventListener('click', seleccionarMascota)
    btnFuego.addEventListener('click', ataqueFuego)
    btnAgua.addEventListener('click', ataqueAgua)
    btnTierra.addEventListener('click', ataqueTierra)
    btnReiniciar.addEventListener('click', reiniciarJuego)
}

function seleccionarMascota() {
    
    sectionSeleccionarMascota.style.display = 'none'
    
    sectionSeleccionarAtaque.style.display = 'flex'
    
    sectionReiniciar.style.display = 'none'

    
    if (inputHipodoge.checked) {
        spanNombreMascota.innerHTML = 'Hipodoge'
        //alert('Seleccionaste a Hipodoge');
    } else if (inputCapipepo.checked) {
        spanNombreMascota.innerHTML = 'Capipepo'
        //alert('Seleccionaste a Capipepo');
    } else if (inputRatigüeya.checked) {
        spanNombreMascota.innerHTML = 'Ratigüeya'
        //alert('Seleccionaste a Ratigüeya');
    } else {
        //alert('Debes seleccionar una mascota')
    }

    mascotaEnemigo()
}

function mascotaEnemigo() {
    if (mascotaAleatorio == 1) {
        //Hipodoge
        spanEnemy.innerHTML = 'Hipodoge'
    } else if (mascotaAleatorio == 2) {
        //Capipepo
        spanEnemy.innerHTML = 'Capipepo'
    } else {
        //Ratigueya
        spanEnemy.innerHTML = 'Ratigueya'
    }

}

function ataqueFuego() {
    ataqueJugador = 'FUEGO'
    //alert('Atacaste con: ' + ataqueJugador)
    ataqueAleatorioEnemigo()
}

function ataqueAgua() {
    ataqueJugador = 'AGUA'
    //alert('Atacaste con: ' + ataqueJugador)
    ataqueAleatorioEnemigo()
}

function ataqueTierra() {
    ataqueJugador = 'TIERRA'
    //alert('Atacaste con: ' + ataqueJugador)
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo() {
    if (ataqueAleatorio == 1) {
        ataqueEnemigo = 'FUEGO'
        //alert(ataqueEnemigo)
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = 'AGUA'
        //alert(ataqueEnemigo)
    } else {
        ataqueEnemigo = 'TIERRA'
        //alert(ataqueEnemigo)
    }
    combate()
}

function combate() {
    if (ataqueJugador == ataqueEnemigo) {
        crearMensaje('EMPATE')
    } else if (ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA') {
        crearMensaje('GANASTE')
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if (ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO') {
        crearMensaje('GANASTE')
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if (ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA') {
        crearMensaje('GANASTE')
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else {
        crearMensaje('PERDISTE')
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }
    revisarVidas() 
}

function revisarVidas() {
    if (vidasEnemigo == 0) {
        crearMensajeFinal('Felicidades, Ganaste !!!')
    } else if (vidasJugador == 0) {
        crearMensajeFinal('Lastima, Perdiste! Mejor suerte a la proxima...')
    }
}

function crearMensaje(resultado) {
    sectionMensajes.innerHTML = resultado
    nuevoAtaqueJugador.innerHTML = ataqueJugador
    nuevoAtaqueEnemigo.innerHTML = ataqueEnemigo
    ataqueDelJugador.appendChild(nuevoAtaqueJugador)
    ataqueDelEnemigo.appendChild(nuevoAtaqueEnemigo)
}

function crearMensajeFinal(resultadoFinal) {
    sectionMensajes.innerHTML = resultadoFinal
    //sectionMensajes.appendChild(parrafo)
    btnFuego.disabled = true
    btnAgua.disabled = true
    btnTierra.disabled = true
    sectionSeleccionarMascota.style.display = 'none'
    sectionSeleccionarAtaque.style.display = 'flex'
    sectionReiniciar.style.display = 'flex'
}

function reiniciarJuego() {
    location.reload()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}


window.addEventListener('load', iniciarJuego)