function contar() {
    var iniciotxt = document.querySelector('input#inicio').value
    var fimtxt = document.querySelector('input#fim').value
    var passotxt = document.querySelector('input#passo').value

    var inicio = Number(iniciotxt)
    var fim = Number(fimtxt)
    var passo = Number(passotxt)

    var res = document.querySelector('div#res')
    var resultado = ''

    if (passo <= 0){
        alert('Passo inválido! Considerando PASSO 1')
        passo = 1 
    }
    if (iniciotxt == '' || fimtxt == '' || passotxt == '') {
        resultado = 'Impossível contar!'
    } else {
        resultado = 'Contando: <br>'
        if (inicio < fim) {
            for (inicio; inicio <= fim; inicio += passo) {
                resultado += ` ${inicio} \u{1F449}`
            }       
        } else {
            for (inicio; inicio >= fim; inicio -= passo) {
                resultado += ` ${inicio} \u{1F449}`
            }       
        }
        resultado += '&#128681'
    }
    res.innerHTML = resultado
}