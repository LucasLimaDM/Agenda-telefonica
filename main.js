const form = document.querySelector('.form-contact')
const nomeContato = document.querySelector('#nome-contato')
const numeroContato = document.querySelector('#numero-contato')
const tableBody = document.querySelector('.tabela-contatos tbody')
const favContatos = []
const favNumeros = []
const contatos = []
const numeros = []

// função dada quando o form é enviado
form.addEventListener('submit', function(e) {
    // Impede a função padrão do submit
    e.preventDefault()
    if (contatos.includes(nomeContato.value)) {
        alert('Contato duplicado! Adicione um novo')
    } 
    else {
        
        let numero = numeroContato.value.replace(/[^0-9]+/g,'')
        var numeroTel = mascaraNumero(numero)
        // Envia os dados para o array
        contatos.push(nomeContato.value)
        numeros.push(numeroTel)

        
        // Chama a função que atualiza os dados da tabela
        atualizaTabela()
        
        
    }
})


function atualizaTabela() {
    console.log('atualiza tabela on')
    // limpa os dados antigos da tabela
    tableBody.innerHTML = ''
    // adiciona os favoritos na tabela
    for (let i = 0; i < favContatos.length; i++) {
        tableBody.innerHTML += `<tr><td>${favContatos[i]}</td> <td>${favNumeros[i]}</td><td><ion-icon name="star" style= "color: #ffd000;" class="star-icon" id="star-${i}" onclick="pintaEstrela(this)"></ion-icon></td></tr>`
        console.log('for FavContatos = ' + i)
    }
    // adiciona os contatos não favoritos
    for (let i = 0; i < contatos.length; i++) {
        tableBody.innerHTML += `<tr><td>${contatos[i]}</td> <td>${numeros[i]}</td><td><ion-icon name="star-outline" class="star-icon" id="star-${favContatos.length + i}" onclick="pintaEstrela(this)"></ion-icon></td></tr>`
        console.log('for contatos comuns = ' + i)
    }  
}
function mascaraNumero(numero) {

var telArr = numero.split('')

if (telArr.length == 11) {
    telArr.splice(0,0,'(')
    telArr.splice(3,0,')')
    telArr.splice(9,0,'-')
} 
if (telArr.length == 8) {
    telArr.splice(4,0,'-')
}
if (telArr.length == 9){
    telArr.splice(5,0,'-')
}
if (telArr.length == 13) {
    telArr.unshift('+')
    telArr.splice(3,0,' ')
    telArr.splice(4,0,'(')
    telArr.splice(7,0,')')
    telArr.splice(13,0,'-')
}

return telArr.join('')

}
// função acionada ao clicar no icone de favorito
function pintaEstrela(element) {
   
    if (element.name == 'star-outline') {
        // comandos caso não seja favorito 
        element.name = 'star'
        let starPosition = element.id.split('-').slice(1)[0] - favContatos.length
        
        favContatos.push(contatos.splice(starPosition, 1)[0])
        favNumeros.push(numeros.splice(starPosition, 1)[0])   
    } else
    // comandos caso seja favorito
     {
        
        element.style.color = 'black'
        element.name = 'star-outline'
        // Determina a posição da estrela pressionada
        let starPosition = element.id.split('-').slice(1)[0]
        // adiciona aos contatos removendo dos favoritos
        contatos.unshift(favContatos.splice(starPosition, 1)[0])
        numeros.unshift(favNumeros.splice(starPosition, 1)[0])

    }
    // atualiza a tabela com as novas informações
    atualizaTabela()
    element.style.color = '#ffd000'
}




