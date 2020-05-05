function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 10) {
                //bebe
                img.setAttribute('src', 'fotos/bebe-homem.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'fotos/jovem-homem.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'fotos/adulto-homem.png')
            } else {
                //idoso
                img.setAttribute('src', 'fotos/idoso-homem.png')
            }
        } else {
            genero = 'Mulher'
            if (idade >=0 && idade < 10) {
                //bebe
                img.setAttribute('src', 'fotos/bebe-mulher.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'fotos/jovem-mulher.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'fotos/adulta-mulher.png')
            } else {
                //idoso
                img.setAttribute('src', 'fotos/idosa-mulher.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}