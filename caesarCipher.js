//Creando funcion principal
function principal(){

  var word = ""

//Ciclo do - while
  do{
	  var option = prompt("Ingrese lo que desea hacer: 1. Cifrar 2.Descifrar") //Preguntando el usuario lo que desea hacer
		if(option != ""){                                                        //Si ingresa opcion distinta a un campo vacio continuar
			if(option == "1") {
        var word = prompt("Ingrese la palabra que desea encriptar");         //Preguntar al usuario por la palabra que desea cifrar
        cipher(word);

			} else if (option == "2") {
        var word = prompt("Ingrese la palabra que desea desencriptar");     //Preguntar al usuario por la palabra que desea descifrar
        decipher(word);

			} else {
				alert("Ingrese una opción válida");                                 //Se emite un alert si ingresa un campo vacio o dato invalido
			}
		}
	} while (option == "" || (option != "1" && option != "2"));               //Se repite la pregunta hasta que se ingrese una opcion valida


//Creando funcion para cifrar mensaje
  function cipher(word){
    var arrayAscii = []                                                     //Se crea array vacio para guardar los codigo ASCII de cada caracter de la palabra
    var phraseCipher;                                                       //Se crea variable donde se guardara la palabra cifrada
    for(var i = 0; i < word.length; i++){                                   //For para iterar sobre la palabra
      arrayAscii.push(String.fromCharCode(word.charCodeAt(i) + 33 % 26));   //Formula para obtener palabra cifrada
    }
    phraseCipher = arrayAscii.join('');                                     //Transformando de array a string
    return alert ("Su palabra encriptada es: " + phraseCipher);             //Retorna un alert con la palabta cifrada
  }

//Creando funcion para descifrar mensaje
  function decipher(word){
    var arrayAscii = []                                                     //Se crea array vacio para guardar los codigo ASCII de cada caracter de la palabra cifrada
    var phraseDecipher;                                                     //Se crea variable donde se guardara la palabra descifrado
    for(var i = 0; i < word.length; i++){                                   //For para iterar sobre la palabra
      arrayAscii.push(String.fromCharCode(word.charCodeAt(i) - 33 % 26));   //Formula para obtener palabra descifrada
  }
    phraseDecipher = arrayAscii.join('');                                   //Transformando de array a string
    return alert ("Su palabra desencriptada es: " + phraseDecipher);        //Retorna un alert con la palabra descifrada
  }
}
principal();                                                                //Llamando a la funcion principal
