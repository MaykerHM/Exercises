var array = []

function adicionar() {
    let numerotxt = document.querySelector('input#numero').value
    let numero = Number(numerotxt)
    
    if(numerotxt.length == 0) {
        alert('Digite um número!')
    } else if (numero < 1 || numero > 100) {
        alert('Valor digitado inválido!')
    } else {
        if (array.indexOf(numero) != -1) {
            alert('Valor repetido, tente outro número!')
        } else {
            let box = document.querySelector('select#box')
            let item = document.createElement('option')
    
            item.innerHTML = `Valor ${numero} adicionado.`
            box.appendChild(item)
    
            array.push(numero)
        }
    }
}

function analisar() {
    if (array.length == 0) {
        alert('Adicione um valor antes de finalizar!')
    }
}