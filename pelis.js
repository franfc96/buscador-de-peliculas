const fs = require("fs");

fs.readFileSync(__dirname + "/pelis.json", (error) => {
  if (error) throw error;
});

let data = fs.readFileSync(__dirname + "/pelis.json"); //lee el archivo json
let peliculas = JSON.parse(data); //convierte el fomato json en un objeto

exports.mostrar = function () {
  console.table(peliculas);
};

exports.ordenarPorTitulo = function () {
  let pelisOrdenadasPorTitulo = ordenarPelisPorTitulo(peliculas);
  return pelisOrdenadasPorTitulo;
};

function ordenarPelisPorTitulo(array) {
  let n, i, k, aux;
  n = array.length;
  // Algoritmo de burbuja
  for (k = 0; k < n; k++) {
    for (i = 0; i < n - k - 1; i++) {
      if (array[i].title > array[i + 1].title) {
        aux = array[i];
        array[i] = array[i + 1];
        array[i + 1] = aux;
      }
    }
  }
  return array;
}

exports.ordenarPorRating = function () {
  let pelisOrdenadasPorRating = ordenarPelisPorRating(peliculas);
  return pelisOrdenadasPorRating;
};

function ordenarPelisPorRating(array) {
  let n, i, k, aux;
  n = array.length;
  // Algoritmo de burbuja
  for (k = 0; k < n; k++) {
    for (i = 0; i < n - k - 1; i++) {
      if (array[i].rating > array[i + 1].rating) {
        aux = array[i];
        array[i] = array[i + 1];
        array[i + 1] = aux;
      }
    }
  }
  return array;
}

exports.buscarPeliculasConLaPalabra = function (palabra) {
  let arrayDePelisConLaPalabra = busquedaSecuencial(palabra);
  return arrayDePelisConLaPalabra;
};

function busquedaSecuencial(palabra) {
  let array = [];
  let palabraABuscar = palabra;
  for (let index = 0; index < peliculas.length; index++) {
    let titulo = peliculas[index].title;
    let tituloEnMinuscula = titulo.toLowerCase();

    if (tituloEnMinuscula.includes(palabraABuscar)) {
      array.push(peliculas[index]);
    }
  }
  return array;
}

exports.buscarPeliculasConElTag = function (tag) {
  let arrayDePelisConElTag = busquedaSecuencialTag(tag);
  return arrayDePelisConElTag;
};

function busquedaSecuencialTag(tag) {
  let array = [];
  for (let i = 0; i < peliculas.length; i++) {
    for (let j = 0; j < peliculas[i].tags.length; j++) {
      if (peliculas[i].tags[j].toLowerCase() == tag) {
        array.push(peliculas[i]);
      }
    }
  }
  return array;
}