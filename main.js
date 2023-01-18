const form = document.querySelector('.form-contact')
const nomeContato = document.querySelector('#nome-contato')
const numeroContato = document.querySelector('#numero-contato')
const tableBody = document.querySelector('.tabela-contatos tbody')
const favContatos = []
const favNumeros = []
const contatos = []
const numeros = []


form.addEventListener('submit', function(e) {
    // Impede a função padrão do submit
    e.preventDefault()
    if (contatos.includes(nomeContato.value)) {
        alert('Contato duplicado! Adicione um novo')
    } else {
        contatos.push(nomeContato.value)
        numeros.push(Number(numeroContato.value))
        // Chama a função que adiciona nova linha na tabela
        atualizaTabela()
        // Envia os dados para o array
        
    }
})


function atualizaTabela() {
    console.log('atualiza tabela on')
    tableBody.innerHTML = ''
    for (let i = 0; i < favContatos.length; i++) {
        tableBody.innerHTML += `<tr><td>${favContatos[i]}</td> <td>${favNumeros[i]}</td><td><ion-icon name="star" style= "color: #ffd000;" class="star-icon" id="star-${i}" onclick="pintaEstrela(this)"></ion-icon></td></tr>`
        console.log('for FavContatos = ' + i)
    }
    for (let i = 0; i < contatos.length; i++) {
        tableBody.innerHTML += `<tr><td>${contatos[i]}</td> <td>${numeros[i]}</td><td><ion-icon name="star-outline" class="star-icon" id="star-${favContatos.length + i}" onclick="pintaEstrela(this)"></ion-icon></td></tr>`
        console.log('for contatos comuns = ' + i)
    }

    
}


function pintaEstrela(element) {

    if (element.name == 'star-outline') {
        
        element.name = 'star'
        var starPosition = element.id.split('-').slice(1)[0]
        console.log(starPosition)
        favContatos.push(contatos.splice(starPosition, 1)[0])
        favNumeros.push(numeros.splice(starPosition, 1)[0])
        console.log('push dos dados')
        console.log(favContatos)
        console.log(favNumeros)
        console.log(contatos)
        console.log(numeros)
       
        
        
    } else {
        element.style.color = 'black'
        element.name = 'star-outline'
        contatos.push(favContatos.splice(starPosition, 1))
        numeros.push(favNumeros.splice(starPosition, 1))
        
        console.log('dados removidos dos favoritos')
        console.log(favContatos)
        console.log(favNumeros)
        console.log(contatos)
        console.log(numeros)

    }
    atualizaTabela()
    element.style.color = '#ffd000'
    console.log('click resolvido')
}




