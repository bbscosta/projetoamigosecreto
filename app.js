// Array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    let input = document.getElementById("amigo");
    let nome = input.value.trim(); // Remove espaços extras no início e no fim

    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    // Verifica se o nome já existe na lista (ignora maiúsculas e minúsculas)
    let nomeExiste = amigos.some(amigo => amigo.toLowerCase() === nome.toLowerCase());

    if (nomeExiste) {
        alert("Esse nome já foi adicionado! Tente incluir um sobrenome para diferenciá-lo.");
        return;
    }

    amigos.push(nome); // Adiciona o nome ao array
    input.value = ""; // Limpa o campo de entrada

    atualizarLista(); // Atualiza a exibição da lista
}

// Função para atualizar a lista de amigos na tela
function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpa a lista antes de adicionar novos itens

    amigos.forEach((amigo) => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Função para sortear um amigo secreto
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("A lista está vazia! Adicione amigos antes de sortear.");
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceSorteado];

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>🎉 Amigo Secreto: <strong>${amigoSorteado}</strong> 🎉</li>`;
}
