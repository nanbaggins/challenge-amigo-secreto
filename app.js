// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

const ingresarAmigo = document.getElementById("amigo");
const listaDeAmigos = [];
const nombresListaDeAmigos = document.getElementById("listaAmigos");
const nombreResultado = document.getElementById("resultado");

function agregarAmigo () {
    listaDeAmigos.push(ingresarAmigo.value);
    nombresListaDeAmigos.innerHTML += `<li>${ingresarAmigo.value}</li>`;
}

function sortearAmigo () {
    const random = Math.floor(Math.random() * listaDeAmigos.length);
    const amigoSecreto = listaDeAmigos[random];
    nombreResultado.innerHTML = `<li>El amigo secreto es ${amigoSecreto}</li>`
}