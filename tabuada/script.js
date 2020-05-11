function gerarTabuada() {
    var numerotxt = document.querySelector('input#numero').value
    var numero = Number(numerotxt)

    var tabuada = document.querySelector('select#tabuada')

    if (numerotxt.length == 0) {
        alert('Digite um número!')
    } else {
        tabuada.innerHTML = ''
        for (var i = 0; i <= 10; i++) {
            var elemento = document.createElement('option')
            elemento.innerHTML = `${i} x ${numero} = ${i*numero}`
            elemento.value = `tab${i}`
            tabuada.appendChild(elemento)
        }
    }
}