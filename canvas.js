function dibujarCanvas(){
    tablero.linewidth =8;
    tablero.linecap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#FAF1A0";
    tablero.strokeStyle = "#6D800F"

    tablero.fillRect(100,50,1200,860);
    tablero.beginPath();
    tablero.moveTo(500,500);
    tablero.lineTo(900,500);
    tablero.stroke();
    tablero.closePath();
}
function dibujarLinea(){
    tablero.linewidth = 6;
    tablero.linecap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#FAF1A0";
    tablero.strokeStyle = "#6D800F"

    let ancho = 500/palabraSecreta.length;

    for (let i=0; i < palabraSecreta.length; i++){
        tablero.moveTo(500 + (ancho * i),640)
        tablero.lineTo(550 + (ancho * i),640)
    }
    tablero.stroke();
    tablero.closePath();

}