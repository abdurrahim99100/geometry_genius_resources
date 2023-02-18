// random color generat
function generatColor(){
    var symbols,color;
    symbols = '0123456789ABCDEF';
    color = '#';
    for(var i = 0; i<6; i++){
        color = color + symbols[Math.floor(Math.random() * 16)];
    }
}