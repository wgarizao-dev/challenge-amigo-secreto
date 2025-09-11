const inputAmigo = document.getElementById("amigo");
const listaAmigos = document.getElementById("listaAmigos");
const resultado = document.getElementById("resultado");
let amigos = [];
let sorteados = [];

function limpiarEntrada() {
    inputAmigo.value = "";
}

function crearElemento(elemento, texto) {
    const li = document.createElement("li");
    li.innerText = texto;
    elemento.appendChild(li);
}

function agregarElemento() {
    listaAmigos.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        crearElemento(listaAmigos, amigos[i]);
    }
}

function agregarAmigo() {
    let amigo = inputAmigo.value;
    if (amigo.length === 0) {
        alert("Ingrese un nombre válido");
    } else {
        amigos.push(amigo);
        agregarElemento();
        limpiarEntrada();
    }
}

function generarNumero() {
    let i = -1;
    if (sorteados.length === amigos.length) return i;
    while (true) {
        i = Math.floor(Math.random() * amigos.length);
        if (!sorteados.includes(i)) {
            sorteados.push(i);
            break;
        }
    }
    return i;
}


function sortearAmigo() {
    if (amigos.length > 0) {
        listaAmigos.innerHTML = "";
        resultado.innerHTML = "";
        let i = generarNumero();
        if (i != -1) {
            crearElemento(resultado, "El amigo secreto sorteado es: " + amigos[i]);
        }
        if (i == -1 && sorteados.length != 0) {
            crearElemento(resultado, "Ya se sortearon todas las presonas");
        }
    }
}
