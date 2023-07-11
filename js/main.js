let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

function iniciarJuego() {
    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'none'
    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'none'

    let btnMascota = document.getElementById('btn-Mascota')
    btnMascota.addEventListener('click', seleccionarMascota)

    let btnFuego = document.getElementById('btn-fuego')
    btnFuego.addEventListener('click', ataqueFuego)
    let btnAgua = document.getElementById('btn-agua')
    btnAgua.addEventListener('click', ataqueAgua)
    let btnTierra = document.getElementById('btn-tierra')
    btnTierra.addEventListener('click', ataqueTierra)

    let btnReiniciar = document.getElementById('btn-reiniciar')
    btnReiniciar.addEventListener('click', reiniciarJuego)
}

function seleccionarMascota() {
    let sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
    sectionSeleccionarMascota.style.display = 'none'
    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'block'
    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'none'

    let inputHipodoge = document.getElementById('Hipodoge')
    let inputCapipepo = document.getElementById('Capipepo')
    let inputRatigüeya = document.getElementById('Ratigüeya')
    let spanNombreMascota = document.getElementById('nombreMascota')
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
    let mascotaAleatorio = aleatorio(1,3)
    let spanEnemy = document.getElementById('enemy')
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
    let ataqueAleatorio = aleatorio(1,3)
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
    let spanVidasJugador = document.getElementById('vidasJugador')
    let spanVidasEnemigo = document.getElementById('vidasEnemigo')


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
    let sectionMensajes = document.getElementById('mensajes')

    let parrafo = document.createElement('p')
    parrafo.innerHTML = 'Tu mascota ataco con: ' + ataqueJugador + '. La mascota del enemigo ataco con: ' + ataqueEnemigo + '. ' + resultado

    sectionMensajes.appendChild(parrafo)

}

function crearMensajeFinal(resultadoFinal) {
    let sectionMensajes = document.getElementById('mensajes')

    let parrafo = document.createElement('p')
    parrafo.innerHTML = resultadoFinal

    sectionMensajes.appendChild(parrafo)

    let btnFuego = document.getElementById('btn-fuego')
    btnFuego.disabled = true
    let btnAgua = document.getElementById('btn-agua')
    btnAgua.disabled = true
    let btnTierra = document.getElementById('btn-tierra')
    btnTierra.disabled = true

    let sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
    sectionSeleccionarMascota.style.display = 'none'
    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'none'
    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'block'

}

function reiniciarJuego() {
    location.reload()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}


window.addEventListener('load', iniciarJuego)