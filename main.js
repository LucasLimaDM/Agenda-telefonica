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
    tableBody.innerHTML = ''
    for (let i = 0; i < contatos.length; i++) {
        tableBody.innerHTML += `<tr><td>${contatos[i]}</td> <td>${numeros[i]}</td><td><ion-icon name="star-outline" class="star-icon" id="star${i}" onclick="pintaEstrela(this)"></ion-icon></td></tr>`
        console.log(i)
    }


    
}


function pintaEstrela(element) {
    if (element.name == 'star-outline') {
        element.style.color = '#ffd000'
        element.name = 'star'
    } else {
        element.style.color = 'black'
        element.name = 'star-outline'
    }

}




