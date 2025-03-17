// Array para armazenar os amigos
let amigos = [];
let sorteados = []; // Para armazenar os amigos já sorteados

// Função para adicionar amigos
function adicionarAmigo() {
    let nomeInput = document.getElementById("amigo");
    let nome = nomeInput.value.trim();

    if (nome === "") {
        alert("Por favor, insira um nome válido.");
        return;
    }

    amigos.push(nome);
    atualizarLista();
    nomeInput.value = "";
}

// Função para atualizar a lista de amigos na tela
function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpa a lista antes de adicionar

    amigos.forEach((amigo) => {
        let item = document.createElement("li");
        item.textContent = amigo;
        lista.appendChild(item);
    });
}

// Função para sortear um amigo
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos dois amigos para o sorteio.");
        return;
    }

    // Verifica se todos os amigos já foram sorteados
    if (sorteados.length === amigos.length) {
        alert("Todos os amigos foram sorteados!");
        return;
    }

    // Encontra um amigo que ainda não foi sorteado
    let amigoSorteado;
    do {
        amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    } while (sorteados.includes(amigoSorteado)); // Garante que o amigo não seja sorteado novamente

    // Exibe o nome do amigo sorteado
    exibirResultado(amigoSorteado);

    // Adiciona o amigo sorteado à lista de sorteados
    sorteados.push(amigoSorteado);
}

// Função para exibir o resultado do sorteio
function exibirResultado(resultado) {
    let listaResultado = document.getElementById("resultado");
    listaResultado.innerHTML = ""; // Limpa o resultado antes de exibir

    let li = document.createElement("li");
    li.textContent = resultado;
    listaResultado.appendChild(li);
}
