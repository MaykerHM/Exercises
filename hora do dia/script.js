function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    // var hora = data.getHours()
    var minutos = data.getMinutes()
    var periodo

    if (hora >= 0 && hora < 12) {
        periodo = 'da manhã.'
    } else if (hora >= 12 && hora < 18) {
        periodo = 'da tarde.'
    } else {
        periodo = 'da noite.'
    }
    msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos ${periodo}`
    
    if (hora >= 0 && hora < 12) {
        //Bom dia
        img.src = 'fotos/manha.png'
        document.body.style.background = 'rgb(113, 195, 233)'
    } else if (hora >= 12 && hora < 18) {
        //Boa tarde
        img.src = 'fotos/tarde.png'
        document.body.style.background = 'rgb(219, 74, 30)'
    } else {
        //Boa noite
        img.src = 'fotos/noite.png'
        document.body.style.background = 'rgb(41, 35, 71)'
    }
}