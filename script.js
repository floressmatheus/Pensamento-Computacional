document.getElementById('form').addEventListener('submit', function(event){
event.preventDefault()
    var nome = document.getElementById('nome').value
    var n1 = parseInt(document.getElementById('nota1').value)
    var n2 = parseInt(document.getElementById('nota2').value)
    var n3 = parseInt(document.getElementById('nota3').value)

    var nf = Math.round((n1 + n2 + n3)/3)

    var resultado = document.getElementById('resultado')
    var mensagem = document.getElementById('mensagem')

    if (nf >= 60){
        mensagem.innerText = `Parabéns, ${nome}! Sua média é: ${nf}. Você está aprovado!`
    } else{
        mensagem.innerText = `Infelizmente, ${nome} Sua média é: ${nf}. Você está reprovado`
    }
    resultado.style.display = 'block'
})