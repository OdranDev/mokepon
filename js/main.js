function iniciarJuego() {
    let btnMascota = document.getElementById('btn-Mascota')
btnMascota.addEventListener('click', seleccionarMascota)
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
    
}

window.addEventListener('load', iniciarJuego)