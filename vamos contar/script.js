function contar() {
    var iniciotxt = document.querySelector('input#inicio').value
    var fimtxt = document.querySelector('input#fim').value
    var passotxt = document.querySelector('input#passo').value

    var inicio = Number(iniciotxt)
    var fim = Number(fimtxt)
    var passo = Number(passotxt)

    var res = document.querySelector('div#res')
    var resultado = 0

    for (inicio; inicio >= fim; inicio = inicio + passo) {
        resultado += inicio
    }

    res.innerHTML = String(resultado)
    console.log(typeof(inicio))
}