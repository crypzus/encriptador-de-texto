
function encriptar() {
    const dictionary = {
        e: "enter",
        i: "imes",
        a: "ai",
        o: "ober",
        u: "ufat"
    };
    var text = document.getElementById("textArea").value;
    var newText = "";

    text = text.toLowerCase();

    for (var i = 0; i < text.length; i++) { // creo un for que recorra el texto que esta escrito en texarea
        var currentLetter = text[i]; //almacena cada letra que recorre en el ciclo for

        //este if else  verificando si la letra actual almacenada en la variable currentLetter está en el diccionario y si esta en el diccionario me cabia la vocales si no imprime normal
        if (dictionary[currentLetter]) {
            newText += dictionary[currentLetter];
        } else {
            newText += currentLetter;
        }
    }


    // esta para me inserta el texto copiado en la etiqueta p
    var textEncriptado = newText;
    document.getElementById("textEncriptado").innerHTML = textEncriptado;
   
}


    function desencriptar(stringDesencriptada){
        //un areglo multi arreglo
        let diccionario = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
        
        stringDesencriptada = stringDesencriptada.toLowerCase();//tolowerCase todo llos valores que ingrese se trasnforma en minuscula
    
        for(let i = 0; i < diccionario.length; i++){
            if(stringDesencriptada.includes(diccionario[i][1])){
                stringDesencriptada = stringDesencriptada.replaceAll(diccionario[i][1] , diccionario[i][0])
    
            }   
            
        }
        //agrega el texto desencritapto al tap p
        var textoDesencriptado = stringDesencriptada;
        document.getElementById("textEncriptado").innerHTML = textoDesencriptado;
              
        
    }




//esta funcion me realiza la trancision entre el la img y el texto.
function transicion() {
    textArea.value = "";
     document.getElementById("busqueda").style.display = "none";
    document.getElementById("copiar").style.display = "block";
}


function copiar() {
    var copia = document.getElementById("textEncriptado").innerText;
    navigator.clipboard.writeText(copia)
    alert("Texto copiado al portapapeles");
}