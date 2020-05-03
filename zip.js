var cadenaEjemplo = "aaaaabbbcc";

function RepeatedChar(cadena, caracter){
    var count=0;
    for(var i=0; i<cadena.length;i++){
        if(cadena[i]== caracter){
            count++;
        }
    }
    return count;
}

var diccionario= [];


for(var i=0;i<cadenaEjemplo.length;i++){
    if(!diccionario.includes(cadenaEjemplo[i])){
        var numberOfChar= RepeatedChar(cadenaEjemplo,cadenaEjemplo[i]);
        diccionario.push(cadenaEjemplo[i]);
        console.log(cadenaEjemplo[i]+" "+numberOfChar);
    }

}