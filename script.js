


const preguntas = [
    {
        "id": "n1",
        "pregunta": "En Harry Potter, ¿Qué hechizo debes conjurar para arreglar unas gafas?",
        "imagen": "assets/oculus.jpg",
        "r1": "Oculus reparo",
        "r2": "Salacadula chalchicomula",
        "r3": "Acero",
        "r4": "Te cojo y te reviento",
        "url": "https://youtu.be/u5H1DIjAq0I",
    },
    {
        "id": "n2",
        "pregunta": "¿Cuál de los siguientes NO es un personaje Marvel?",
        "imagen": "assets/marvel.jpg",
        "r1": "Spider-man",
        "r2": "Tormenta",
        "r3": "Flash",
        "r4": "Magneto",
    },
    {
        "id": "n3",
        "pregunta": "¿De qué metal están hechas las garras de Lobezno?",
        "imagen": "assets/Wolve.jpg",
        "r1": "Vibranium",
        "r2": "Aluminio",
        "r3": "Adamantium",
        "r4": "Acero",
    },
    {
        "id": "n4",
        "pregunta": "En Star Wars ¿Cuál es el planeta de Luke Skywalker?",
        "imagen": "assets/luke.jpg",
        "r1": "Alderaan",
        "r2": "Naboo",
        "r3": "Tatooine",
        "r4": "Coruscant",
    },
    {
        "id": "n5",
        "pregunta": "En Juego de Tronos, ¿Con qué otro nombre es conocido el Vidriagón?",
        "imagen": "assets/Got.jpg",
        "r1": "Obsidiana",
        "r2": "Carbonita",
        "r3": "Diamante Carbón",
        "r4": "Diamantina",
    },
    {
        "id": "n6",
        "pregunta": "Por si no nos vemos luego...",
        "imagen": "assets/show.jpg",
        "r1": "(...) no te olvides el paraguas",
        "r2": "(...) recuerda comprar leche",
        "r3": "(...) buenos días, buenas tardes, buenas noches",
        "r4": "(...) toma mi espada, llévala por mi",
    },
    {
        "id": "n7",
        "pregunta": "En los pitufos, ¿Cómo se llama el villano y su gato?",
        "imagen": "assets/pitufos.jpg",
        "r1": "Hans y Landa",
        "r2": "Calvin y Candie",
        "r3": "Gargamel y Azrael",
        "r4": "Bonnie y Clyde",
    },
    {
        "id": "n8",
        "pregunta": "En Malditos Bastardos, ¿Cómo se llamaba el oso judío?",
        "imagen": "assets/judio.jpg",
        "r1": "Aldo Raine",
        "r2": "Donny Donowitz",
        "r3": "Hugo Stiglitz",
        "r4": "Frederic Sola",
        "url": "https://youtu.be/AKDEhZNF-vg?si=BBMm_t6oq8Zewp1k",
    },
    {
        "id": "n9",
        "pregunta": "¿A qué año viajan Marty y Doc en Regreso al futuro II",
        "imagen": "assets/futuro.jpeg",
        "r1": "2015",
        "r2": "2022",
        "r3": "2050",
        "r4": "2002",
    },
    {
        "id": "n10",
        "pregunta": "Qué ciudad está plagada de fantasmas en “Cazafantasmas”",
        "imagen": "assets/Ghostbusters.webp",
        "r1": "Los Angeles",
        "r2": "Dallas",
        "r3": "New York",
        "r4": "Teruel",
    }];// viene de un "servidor externo"

const respuestas = [
    {
        "id": "1",
        "correcto": "Oculus reparo",
        "ok": "r1"
    },
    {
        "id": "2",
        "correcto": "Flash",
        "ok": "r3"
    },
    {
        "id": "3",
        "correcto": "Adamantium",
        "ok": "r3"
    },
    {
        "id": "4",
        "correcto": "Tatooine",
        "ok": "r3"
    },
    {
        "id": "5",
        "correcto": "Obsidiana",
        "ok": "r1"
    },
    {
        "id": "6",
        "correcto": "(...) buenos días, buenas tardes, buenas noches",
        "ok": "r3"
    },
    {
        "id": "7",
        "correcto": "Gargamel y Azrael",
        "ok": "r3"
    },
    {
        "id": "8",
        "correcto": "Donny Donowitz",
        "ok": "r2"
    },
    {
        "id": "9",
        "correcto": "2015",
        "ok": "r1"
    },
    {
        "id": "10",
        "correcto": "New York",
        "ok": "r3"
    },
]


let trivial = "<div>";

//ESCRIBIMOS LAS PREGUNTAS
for (let i = 0; i < preguntas.length; i++) {
    trivial += `<article>
                <h3>Pregunta: `+(i+1)+" - "+`${preguntas[i].pregunta}</h3>
                <img src="${preguntas[i].imagen}" width="500" height="300"><br>
                <label for="${preguntas[i].id}"></label>
                <div><h4>
                <input type="radio" id="${preguntas[i].r1}" name="${preguntas[i].id}" value="r1"/>${preguntas[i].r1}<br>
                <input type="radio" id="${preguntas[i].r2}" name="${preguntas[i].id}" value="r2"/>${preguntas[i].r2}<br>
                <input type="radio" id="${preguntas[i].r3}" name="${preguntas[i].id}" value="r3"/>${preguntas[i].r3}<br>
                <input type="radio" id="${preguntas[i].r4}" name="${preguntas[i].id}" value="r4"/>${preguntas[i].r4}</h4></div><br>
              </article>`
}
trivial += `<input type="submit" value="Enviar Respuestas" class="css-button-fully-rounded--blue"/>`;
trivial += "</div>";

document.getElementById("quizForm").innerHTML = trivial;


//VALIDACION DE RESPUESTAS
document.querySelector("#quizForm").addEventListener("submit", function (event) {
    event.preventDefault(); // paraliza envío formulario

    const respuesta1 = event.target.n1.value;
    const respuesta2 = event.target.n2.value;
    const respuesta3 = event.target.n3.value;
    const respuesta4 = event.target.n4.value;
    const respuesta5 = event.target.n5.value;
    const respuesta6 = event.target.n6.value;
    const respuesta7 = event.target.n7.value;
    const respuesta8 = event.target.n8.value;
    const respuesta9 = event.target.n9.value;
    const respuesta10 = event.target.n10.value;

    let errores = "";
    let aciertos = 0;

    if (respuesta1 == "") { //Sin contestar
        console.log('No has contestado la pregunta 1\n');
        errores += "No has contestado la pregunta 1\n";
    } else if (respuesta1 == 'r1') {
        console.log('Has acertado la pregunta 1\n');
        aciertos++;
    } else {
        console.log('Fallaste Burlan Caster!!\n');
        errores += 'Fallaste la pregunta 1\n'
    }

    if (respuesta2 == "") { //Sin contestar
        console.log('No has contestado la pregunta 2\n');
        errores += "No has contestado la pregunta 2\n";
    } else if (respuesta2 == 'r3') {
        console.log('Has acertado la pregunta 2\n');
        aciertos++;
    } else {
        console.log('Fallaste Burlan Caster!!\n');
        errores += 'Fallaste la pregunta 2\n'
    }

    if (respuesta3 == "") { //Sin contestar
        console.log('No has contestado la pregunta 3\n');
        errores += "No has contestado la pregunta 3\n";
    } else if (respuesta3 == 'r3') {
        console.log('Has acertado la pregunta 3\n');
        aciertos++;
    } else {
        console.log('Fallaste Burlan Caster!!\n');
        errores += 'Fallaste la pregunta 3\n'
    }

    if (respuesta4 == "") { //Sin contestar
        console.log('No has contestado la pregunta 4\n');
        errores += "No has contestado la pregunta 4\n";
    } else if (respuesta4 == 'r3') {
        console.log('Has acertado la pregunta 4\n');
        aciertos++;
    } else {
        console.log('Fallaste Burlan Caster!!\n');
        errores += 'Fallaste la pregunta 4\n'
    }

    if (respuesta5 == "") { //Sin contestar
        console.log('No has contestado la pregunta 5\n');
        errores += "No has contestado la pregunta 5\n";
    } else if (respuesta5 == 'r1') {
        console.log('Has acertado la pregunta 5\n');
        aciertos++;
    } else {
        console.log('Fallaste Burlan Caster!!\n');
        errores += 'Fallaste la pregunta 5\n'
    }

    if (respuesta6 == "") { //Sin contestar
        console.log('No has contestado la pregunta 6\n');
        errores += "No has contestado la pregunta 6\n";
    } else if (respuesta6 == 'r3') {
        console.log('Has acertado la pregunta 6\n');
        aciertos++;
    } else {
        console.log('Fallaste Burlan Caster!!\n');
        errores += 'Fallaste la pregunta 6\n'
    }

    if (respuesta7 == "") { //Sin contestar
        console.log('No has contestado la pregunta 7\n');
        errores += "No has contestado la pregunta 7\n";
    } else if (respuesta7 == 'r3') {
        console.log('Has acertado la pregunta 7\n');
        aciertos++;
    } else {
        console.log('Fallaste Burlan Caster!!\n');
        errores += 'Fallaste la pregunta 7\n'
    }

    if (respuesta8 == "") { //Sin contestar
        console.log('No has contestado la pregunta 8\n');
        errores += "No has contestado la pregunta 8\n";
    } else if (respuesta8 == 'r2') {
        console.log('Has acertado la pregunta 8\n');
        aciertos++;
    } else {
        console.log('Fallaste Burlan Caster!!\n');
        errores += 'Fallaste la pregunta 8\n'
    }

    if (respuesta9 == "") { //Sin contestar
        console.log('No has contestado la pregunta 9\n');
        errores += "No has contestado la pregunta 9\n";
    } else if (respuesta9 == 'r1') {
        console.log('Has acertado la pregunta 9\n');
        aciertos++;
    } else {
        console.log('Fallaste Burlan Caster!!\n');
        errores += 'Fallaste la pregunta 9\n'
    }

    if (respuesta10 == "") { //Sin contestar
        console.log('No has contestado la pregunta 10\n');
        errores += "No has contestado la pregunta 10\n";
    } else if (respuesta10 == 'r3') {
        console.log('Has acertado la pregunta 10\n');
        aciertos++;
    } else {
        console.log('Fallaste Burlan Caster!!\n');
        errores += 'Fallaste la pregunta 10\n'
    }

    console.log(errores);

    if (errores.length != 0) {
        alert(errores);
      }
      else if(aciertos==10){ 
        alert("¡¡¡ TODO CORRECTO !!!")
        alert("Gracias, por jugar");
        event.target.submit();}
      else{
        //Enviar formulario
        alert("Gracias, por jugar");
        event.target.submit();
      }

});
  