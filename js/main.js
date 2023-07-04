let ataqueJugador;
let ataqueEnemigo;

function iniciarJuego() {
    let btnMascota = document.getElementById('btn-Mascota')
    btnMascota.addEventListener('click', seleccionarMascota)

    let btnFuego = document.getElementById('btn-fuego')
    btnFuego.addEventListener('click', ataqueFuego)
    let btnAgua = document.getElementById('btn-agua')
    btnAgua.addEventListener('click', ataqueAgua)
    let btnTierra = document.getElementById('btn-tierra')
    btnTierra.addEventListener('click', ataqueTierra)
}

function seleccionarMascota() {
    let inputHipodoge = document.getElementById('Hipodoge')
    let inputCapipepo = document.getElementById('Capipepo')
    let inputRatigüeya = document.getElementById('Ratigüeya')
    let spanNombreMascota = document.getElementById('nombreMascota')
    if (inputHipodoge.checked) {
        spanNombreMascota.innerHTML = 'Hipodoge'
        alert('Seleccionaste a Hipodoge');
    } else if (inputCapipepo.checked) {
        spanNombreMascota.innerHTML = 'Capipepo'
        alert('Seleccionaste a Capipepo');
    } else if (inputRatigüeya.checked) {
        spanNombreMascota.innerHTML = 'Ratigüeya'
        alert('Seleccionaste a Ratigüeya');
    } else {
        alert('Debes seleccionar una mascota')
    }

    mascotaEnemigo()
    ataqueAleatorioEnemigo()
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
    ataqueJugador = ' FUEGO '
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
    if (ataqueJugador == ataqueEnemigo) {
        crearMensaje('EMPATE')
    } else if (ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA') {
        crearMensaje('GANASTE')
    } else if (ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO') {
        crearMensaje('GANASTE')
    } else if (ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA') {
        crearMensaje('GANASTE')
    } else {
        crearMensaje('PERDISTE')
    }
}

function crearMensaje(resultado) {
    let sectionMensajes = document.getElementById('mensajes')

    let parrafo = document.createElement('p')
    parrafo.innerHTML = 'Tu mascota ataco con: ' + ataqueJugador + '. La mascota del enemigo ataco con: ' + ataqueEnemigo + '. ' + resultado

    sectionMensajes.appendChild(parrafo)

}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}


window.addEventListener('load', iniciarJuego)