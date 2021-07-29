import lista from "./lista.js";
var areaCards = document.querySelector(".area-cards")

function montarCard(titulo, conteudo){
    var containerCard = document.createElement('div')
    containerCard.classList.add('serviço')
    
    var card = `
                <h1 class="botaum">${titulo}</h1>
                <h2>${conteudo}</h2>
                <button>Agendar</button>              
    `
    containerCard.innerHTML = card
    areaCards.append(containerCard)
}

lista.forEach(element => {
    montarCard(element.titulo, element.conteudo)
});
