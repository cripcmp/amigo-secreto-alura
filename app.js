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
    if (participantes.length < 2 || participantes.length % 2 !== 0) {
        alert("Se necesitan al menos 2 participantes y un número par.");
        return;
    }

    let mezcla = [...participantes];

    //  Fisher-Yates Shuffle para desordenar la lista
    for (let i = mezcla.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [mezcla[i], mezcla[j]] = [mezcla[j], mezcla[i]];
    }

    let asignaciones = {};

    // Emparejar de dos en dos
    for (let i = 0; i < mezcla.length; i += 2) {
        asignaciones[mezcla[i]] = mezcla[i + 1];
        asignaciones[mezcla[i + 1]] = mezcla[i];
    }

    mostrarResultado(asignaciones);
}

function mostrarResultado(asignaciones) {
    let resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = "<h3>Resultados:</h3>";

    for (let participante in asignaciones) {
        let p = document.createElement("p");
        p.textContent = `${participante} ↔ ${asignaciones[participante]}`;
        resultadoDiv.appendChild(p);
    }
}
