


const preguntas = [
    {
        "numero": "1",
        "pregunta": "En Harry Potter, ¿Qué hechizo debes conjurar para arreglar unas gafas?",
        "imagen": "assets/oculus.jpg",
        "r1": "Oculus reparo",
        "r2": "Salacadula chalchicomula",
        "r3": "Acero",
        "r4": "Te cojo y te reviento",
        "url": "https://youtu.be/u5H1DIjAq0I",
    },
    {
        "numero": "2",
        "pregunta": "¿Cuál de los siguientes NO es un personaje Marvel?",
        "imagen": "assets/marvel.jpg",
        "r1": "Spider-man",
        "r2": "Tormenta",
        "r3": "Flash",
        "r4": "Magneto",
    },
    {
        "numero": "3",
        "pregunta": "¿De qué metal están hechas las garras de Lobezno?",
        "imagen": "assets/Wolve.jpg",
        "r1": "Vibranium",
        "r2": "Aluminio",
        "r3": "Adamantium",
        "r4": "Acero",

    },
    {
        "numero": "4",
        "pregunta": "En Star Wars ¿Cuál es el planeta de Luke Skywalker?",
        "imagen": "assets/luke.jpg",
        "r1": "Alderaan",
        "r2": "Naboo",
        "r3": "Tatooine",
        "r4": "Coruscant",
    },
    {
        "numero": "5",
        "pregunta": "En Juego de Tronos, ¿Con qué otro nombre es conocido el Vidriagón?",
        "imagen": "assets/Got.jpg",
        "r1": "Obsidiana",
        "r2": "Carbonita",
        "r3": "Diamante Carbón",
        "r4": "Diamantina",
    },
    {
        "numero": "6",
        "pregunta": "Por si no nos vemos luego...",
        "imagen": "assets/show.jpg",
        "r1": "(...) no te olvides el paraguas",
        "r2": "(...) recuerda comprar leche",
        "r3": "(...) buenos días, buenas tardes, buenas noches",
        "r4": "(...) toma mi espada, llévala por mi",
    },
    {
        "numero": "7",
        "pregunta": "En los pitufos, ¿Cómo se llama el villano y su gato?",
        "imagen": "assets/pitufos.jpg",
        "r1": "Hans y Landa",
        "r2": "Calvin y Candie",
        "r3": "Gargamel y Azrael",
        "r4": "Bonnie y Clyde",
    },
    {
        "numero": "8",
        "pregunta": "En Malditos Bastardos, ¿Cómo se llamaba el oso judío?",
        "imagen": "assets/judio.jpg",
        "r1": "Aldo Raine",
        "r2": "Donny Donowitz",
        "r3": "Hugo Stiglitz",
        "r4": "Frederic Sola",
        "url": "https://youtu.be/AKDEhZNF-vg?si=BBMm_t6oq8Zewp1k",
    },
    {
        "numero": "9",
        "pregunta": "¿A qué año viajan Marty y Doc en Regreso al futuro II",
        "imagen": "assets/futuro.jpeg",
        "r1": "2015",
        "r2": "2022",
        "r3": "2050",
        "r4": "2002",
    },
    {
        "numero": "10",
        "pregunta": "Qué ciudad está plagada de fantasmas en “Cazafantasmas”",
        "imagen": "assets/Ghostbusters.webp",
        "r1": "Los Angeles",
        "r2": "Dallas",
        "r3": "New York",
        "r4": "Teruel",
    }];// viene de un "servidor externo"

const respuestas = [
    {
        "numero": "1",
        "correcto": "Oculus reparo",
    },
    {
        "numero": "2",
        "correcto": "Flash",
    },
    {
        "numero": "3",
        "correcto": "Adamantium",
    },
    {
        "numero": "4",
        "correcto": "Tatooine",
    },
    {
        "numero": "5",
        "correcto": "Obsidiana",
    },
    {
        "numero": "6",
        "correcto": "(...) buenos días, buenas tardes, buenas noches",
    },
    {
        "numero": "7",
        "correcto": "Gargamel y Azrael",
    },
    {
        "numero": "8",
        "correcto": "Donny Donowitz",
    },
    {
        "numero": "9",
        "correcto": "2015",
    },
    {
        "numero": "10",
        "correcto": "New York",
    },
]


let trivial = "<div>";

//ESCRIBIMOS LAS PREGUNTAS
for (let i = 0; i < preguntas.length; i++) {
    trivial += `<article>
                <h3>${preguntas[i].pregunta}</h3>
                <img src="${preguntas[i].imagen}" width="500" height="300"><br>
                <label for="${preguntas[i].numero}"></label>
                <div><h4>
                <input type="radio" id="${preguntas[i].r1}" name="${preguntas[i].numero}" value="r1"/>${preguntas[i].r1}<br>
                <input type="radio" id="${preguntas[i].r2}" name="${preguntas[i].numero}" value="r2"/>${preguntas[i].r2}<br>
                <input type="radio" id="${preguntas[i].r3}" name="${preguntas[i].numero}" value="r3"/>${preguntas[i].r3}<br>
                <input type="radio" id="${preguntas[i].r4}" name="${preguntas[i].numero}" value="r4"/>${preguntas[i].r4}</h4></div><br>
              </article>`
}
trivial += `<input type="submit" value="Enviar Respuestas" class="css-button-fully-rounded--blue"/>`;
trivial += "</div>";

document.getElementById("quizForm").innerHTML = trivial;


//VALIDACION DE RESPUESTAS
document.querySelector("#quizForm > div > input").addEventListener("submit", function (event) {
    event.preventDefault(); // paraliza envío formulario

    for (let j = 1; j < preguntas.length + 1; j++) {
        console.log(event.target.elements);
        console.log(event.target.preguntas[j].name);

        const resp = event.target.preguntas[j].value;

        let errores = "";

        // Lógica de validación
        if (preguntas[j] == respuestas[j]) {
            console.log("Eres un máquina, acertaste la pregunta " + j + "\n");
        } else {
            errores += "Has fallado la pregunta " + j + "\n";
        }
    }

    console.log(errores);

    // Comprobar si hay errores
    if (errores.length != 0) {
        alert(errores);
    }
    else {
        //Enviar formulario
        alert("Gracias, por jugar");
        event.target.submit();
    }
});