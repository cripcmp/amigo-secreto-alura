// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let participantes = [];

function agregarAmigo() {
    let amigo = document.getElementById("amigo").value.trim();
    if (amigo === "" || participantes.includes(amigo)) {
        alert("Nombre inválido o repetido.");
        return;
    }

    participantes.push(amigo);
    document.getElementById("amigo").value = "";

    actualizarLista();
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    participantes.forEach((amigo) => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (participantes.length < 2) {
        alert("Se necesitan al menos 2 participantes.");
        return;
    }

    let asignaciones = {};
    let disponibles = [...participantes];

    for (let participante of participantes) {
        let opciones = disponibles.filter(p => p !== participante);

        if (opciones.length === 0) {
            alert("Error en la asignación. Inténtalo de nuevo.");
            return;
        }

        let elegido = opciones[Math.floor(Math.random() * opciones.length)];
        asignaciones[participante] = elegido;

        disponibles = disponibles.filter(p => p !== elegido);
    }

    mostrarResultado(asignaciones);
}

function mostrarResultado(asignaciones) {
    let resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = "<h3>Resultados:</h3>";

    for (let participante in asignaciones) {
        let p = document.createElement("p");
        p.textContent = `${participante} → ${asignaciones[participante]}`;
        resultadoDiv.appendChild(p);
    }
}
