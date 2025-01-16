// Array para almacenar los amigos.
let amigos = [];

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let amigo = input.value;

    // Validar que se haya ingresado un amigo en el input.
    if (amigo === "") {
        alert("Por favor ingrese un amigo");
    } else {
        // Agregar el amigo al array y limpiar el input.
        amigos.push(amigo);
        input.value = "";

        // Actualizar la lista de amigos.
        actualizarLista();
    }
} 

function actualizarLista() {
    // Limpiar la lista de amigos.
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    // Recorrer el array de amigos y agregarlos a la lista.
    for (let i = 0; i < amigos.length; i++) {
        let amigo = amigos[i];
        let li = document.createElement("li");
        li.innerHTML = amigo;
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    // Verificar si hay amigos para sortear.
    if (amigos.length === 0) {
        alert("No hay amigos para sortear");
    } else {
        // Crear un número aleatorio entre 0 y la longitud del array.
        let numeroRandom = Math.floor(Math.random() * amigos.length);
        let amigoSecreto = amigos[numeroRandom];

        // Mostrar el amigo secreto
        let resultado = document.getElementById("resultado");
        resultado.innerHTML = `El amigo secreto es: ${amigoSecreto}`;
    }
}
