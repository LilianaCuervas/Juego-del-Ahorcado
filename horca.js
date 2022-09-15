//Selectores
let palabras = ["DELFIN", "TIBURON", "PULPO","PEZ", "CALAMAR"];
let tablero = document.getElementById("game").getContext("2d");
let palabraSecreta = "";




function escogerPalabraSecreta(){
    let palabra = palabras[Math.floor(Math.random() * palabras.length)]
    palabraSecreta = palabra;
    console.log(palabraSecreta)
}

function iniciarJuego(){
    document.getElementById("iniciar-juego").style.display = "none"
    //momentaneamente deje la opcion hasta que haga la funcion de agregar palabra
    document.getElementById("agregar-palabra").style.display = "none"
    escogerPalabraSecreta();
    dibujarCanvas();
    dibujarLinea()
}
//function agregarPalabra(){
   // document.getElementById("agregar-palabra").style.display = "none"

//}