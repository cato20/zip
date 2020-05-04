var cadenaEjemplo = "aaaaabbbcc";

console.log("Entrada: " + cadenaEjemplo)

function RepeatedChar(cadena, caracter){
    var count=0;
    for(var i=0; i<cadena.length;i++){
        if(cadena[i]== caracter){
            count++;
        }
    }
    return count;
}

var diccionario= {};
var keyValues = [];

for(var i=0;i<cadenaEjemplo.length; i++){
    if(!(cadenaEjemplo[i] in diccionario)){
        var numberOfChar= RepeatedChar(cadenaEjemplo,cadenaEjemplo[i]);
        diccionario[cadenaEjemplo[i]]=numberOfChar;
        
    }

}

for(var key in diccionario){
    keyValues.push([key,diccionario[key]]);
}

keyValues.sort(function(first,second){
    return second[1] - first[1];
});

var nbits = keyValues.length

for(var i=keyValues.length-1; i>=0; i--){
    var codif = ""
    for(var j=nbits; j>1; j--){
        codif += "0"
    }
    nbits -= 1
    codif += "1"
    keyValues[i].push(codif)
}

console.log(keyValues);
var salidaConcat = "";

for(var i=0; i<keyValues.length; i++){
    for(var j=0; j<keyValues[i][1]; j++){
        salidaConcat += keyValues[i][2]
    }
}

console.log("Salida Codificada: "+salidaConcat);