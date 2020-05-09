function contar() {
    var iniciotxt = document.querySelector('input#inicio').value
    var fimtxt = document.querySelector('input#fim').value
    var passotxt = document.querySelector('input#passo').value

    var inicio = Number(iniciotxt)
    var fim = Number(fimtxt)
    var passo = Number(passotxt)

    var res = document.querySelector('div#res')
    var resultado = ''

    if (iniciotxt == '' || fimtxt == '' || passotxt == '' || passo == 0) {
        resultado = 'Impossível contar!'
    } else {
        for (inicio; inicio <= fim; inicio = inicio + passo) {
            resultado += String(inicio) + ' &#128073 '
        }
        resultado += '&#128681'
    }
    res.innerHTML = resultado
}