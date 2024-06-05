export class Temas {
    constructor() {
        this.temas = [];
    }
    //Metodos
    agregarTema(nombre, descripcion) {
        let nuevoTema = {
            nombre: nombre,
            descripcion: descripcion,
        };
        this.temas.push(nuevoTema);
    }

    obtenerCantidadDeTemas() {
        return this.temas.length;
    }

    imprimirTemas() {
        let temasHTML = '';
        for (let tema of this.temas) {
            temasHTML += `<li>Nombre: ${tema.nombre}, Descripción: ${tema.descripcion}</li>`;
        }
        return temasHTML;
    }
    imprimirTemasenpreguntas() {
        // console.log(this.temas);
        let temasHTML = '';
        for (let tema of this.temas) {
            temasHTML += `<option value="${tema.nombre}">${tema.nombre} - ${tema.descripcion}</option>`;

        }
        return temasHTML;
    }
    validarTemaRepetido(nombre) {
        for (let tema of this.temas) {
            if (tema.nombre === nombre) {
                return false;  // Retorna false si se encuentra un tema repetido
            }
        }
        return true;  // Retorna true si no se encuentra un tema repetido
    }



}

export class Preguntas {
    constructor(temas, nivel, textodelapregunta, respuestacorrecta, respuestaIncorrectas) {
        this.temas = temas;
        this.nivel = nivel;
        this.textodelapregunta = textodelapregunta;
        this.respuestacorrecta = respuestacorrecta;
        this.respuestaincorrectas = respuestaIncorrectas;
        this.pregunta = [];

    }

    //Metodos


    obtenerdatospreguntas(nivel, textodelapregunta, respuestacorrecta, respuestaIncorrectas) {
        let preguntas = {
            nivel: nivel,
            textodelapregunta: textodelapregunta,
            respuestacorrecta: respuestacorrecta,
            respuestaincorrectas: respuestaIncorrectas,

        };
        this.pregunta.push(preguntas);

        // console.log(this.pregunta);

    }


    cantpreguntas() {
        return this.pregunta.length;

    }

    promedioTemas() {
        let cantdetemas = this.temas.obtenerCantidadDeTemas();
        let cantpreguntas = this.cantpreguntas();
        let promedio = 0;

        if (cantdetemas > 0) {
            promedio = cantpreguntas / cantdetemas;
        }

        return promedio;
    }

    agregarTabla() {
        let insertarFila = '';
        for (let pregunta of this.pregunta) {
            insertarFila += `<tr><td>${this.temas.obtenerCantidadDeTemas()}</td><td>${pregunta.nivel}</td><td>${pregunta.textodelapregunta}</td><td>${pregunta.respuestacorrecta}</td><td>${pregunta.respuestaincorrectas}</td></tr>`;
        }
        return insertarFila;
    }
    
    
   validarPreguntaRepetida(textodelapregunta) {
    for (let pregunta of this.pregunta) {
        if (pregunta.textodelapregunta === textodelapregunta) {
            return false;  // Retorna false si la pregunta ya ha sido ingresada
        }
    }
    return true;  // Retorna true si la pregunta no ha sido ingresada
}






}



