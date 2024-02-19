//este archivo recibe el input del usuario, lo organiza en un objeto, para pasarle esa informacion a una funcion exportada
// de pelis.js que resuelve lo pedido.
const pelis = require("./pelis");

function main() {
  let argumentoUno = process.argv[2];
  let argumentoDos = process.argv[3];
  //si los argumentos son indefinidos devuelve todas las peliculas
  if (argumentoUno == undefined && argumentoDos == undefined) {
    pelis.mostrar();
  } else {
    if (argumentoUno == undefined || argumentoDos == undefined) {
      console.log("ingrese parametros validos");
      return;
    }
    //si hay argumentos los convierte a minusculas y los conacatena
    let argumentoUnoMinuscula = argumentoUno.toLowerCase();
    let argumentoDosMinuscula = argumentoDos.toLowerCase();
    let concatenarArgumentos =
      argumentoUnoMinuscula + " " + argumentoDosMinuscula;
    // si el argumento es --sort title devuelve las pelis en orden alfabetico por titulo
    if (concatenarArgumentos == "--sort title") {
      let pelisOrdenadas = pelis.ordenarPorTitulo();
      console.table(pelisOrdenadas);
      //si el argumento es --sort rating devuelve las pelis en orden de menor a mayor por rating
    } else if (concatenarArgumentos == "--sort rating") {
      let pelisOrdenadas = pelis.ordenarPorRating();
      console.table(pelisOrdenadas);
    } //si el argumento incluye la palabra --search muestra las pelis q contengan el argumento buscado
    else if (concatenarArgumentos.includes("--search")) {
      let peliculasConLaPalabra = pelis.buscarPeliculasConLaPalabra(
        argumentoDosMinuscula
      );
      console.table(peliculasConLaPalabra);
    } //muestra las pelis q contengan el argumento despues de tag
    else if (concatenarArgumentos.includes("--tag")) {
      let argumento = "";
      for (let index = 0; index < process.argv.length - 3; index++) {
        argumento = argumento + " " + process.argv[index + 3];
      }
      let argumentoEnMinuscula = argumento.toLowerCase();
      let argumentoSinEspacios = argumentoEnMinuscula.trim();

      let peliculasConElTag =
        pelis.buscarPeliculasConElTag(argumentoSinEspacios);
      console.table(peliculasConElTag);
    } else {
      console.log("ingrese parametros validos");
      return;
    }
  }
}

main();







