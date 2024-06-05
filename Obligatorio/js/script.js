import { Temas, Preguntas } from './clases.js';

// Crea instancias de las clases
let temas = new Temas();
let preguntas = new Preguntas(temas);

window.addEventListener("load", function () {
  document.getElementById("btn-agregar").addEventListener("click", function (event) {
    event.preventDefault();

    // Obtiene los valores de nombre y descripcion
    let nombre = document.getElementById("input-nombre").value;
    let descripcion = document.getElementById("input-descripcion").value;

    // Llama a la función altatema para agregar el tema
    altatema(nombre, descripcion);
  });

  document.getElementById("btn-agregarpreguntas").addEventListener("click", function (event) {
    event.preventDefault();

    let nivel = document.getElementById("nivel").value;
    let textoPregunta = document.getElementById("textoPregunta").value;
    let respuestaCorrectas = document.getElementById("respuestaCorrectas").value;
    let respuestaIncorrectas = document.getElementById("respuestaIncorrectas").value;

    altapregunta(nivel, textoPregunta, respuestaCorrectas, respuestaIncorrectas);
  });
});

function altapregunta(nivel, textoPregunta, respuestaCorrectas, respuestaIncorrectas) {
  if (preguntas.validarPreguntaRepetida(textoPregunta)) {
    validar(nivel, textoPregunta, respuestaCorrectas, respuestaIncorrectas);
  } else {
    alert("Pregunta Ya Ingresada!!");
  }
}

function altatema(nombre, descripcion) {
  if (nombre && descripcion) {
    if (temas.validarTemaRepetido(nombre)) {
      temas.agregarTema(nombre, descripcion);
      actualizarVista();
    } else {
      alert("Tema Repetido!!");
    }
  } else {
    alert("Se deben ingresar datos!");
  }
}

function validar(nivel, textoPregunta, respuestaCorrectas, respuestaIncorrectas) {
  switch (true) {
    case isNaN(nivel):
      alert("Debe ingresar un número!");
      break;
    case nivel < 1 || nivel > 5:
      alert("El nivel debe estar entre 1 y 5!");
      break;
    case !nivel || !textoPregunta || !respuestaCorrectas || !respuestaIncorrectas:
      alert("Se deben ingresar todos los datos antes de agregar la pregunta!");
      break;
    default:
      if (preguntas.validarPreguntaRepetida(textoPregunta)) {
        preguntas.obtenerdatospreguntas(nivel, textoPregunta, respuestaCorrectas, respuestaIncorrectas);
        actualizarVista();
      } else {
        alert("Pregunta ya ingresada!");
      }
      break;
  }
}






function actualizarVista() {
  let cantdetemas = temas.obtenerCantidadDeTemas();
  document.getElementById("cantdetemas").innerHTML = `Lista de temas (Cantidad de temas: ${cantdetemas})`;

  if (cantdetemas === 0) {
    document.getElementById("ul-listatemas").innerHTML = '<li>Sin Datos</li>';
  } else {
    document.getElementById("ul-listatemas").innerHTML = temas.imprimirTemas();
  }

  document.getElementById("preferencia").innerHTML = temas.imprimirTemasenpreguntas(); // Corregir aquí

  let cantpreguntas = preguntas.cantpreguntas();
  document.getElementById("totalpreguntas").innerHTML = `Total de preguntas registradas: ${cantpreguntas}`;

  let promediotemas = preguntas.promedioTemas();
  document.getElementById("promediotemas").innerHTML = `Promedio de preguntas por temas: ${promediotemas}`;

  document.getElementById("filanueva").innerHTML = preguntas.agregarTabla();
}
