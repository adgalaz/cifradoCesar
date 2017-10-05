
### Cifrado César.

#### El programa cifra y descifra una palabra ingresada por el usuario.

##### Paso 1. Se inicia preguntando al usuario lo que desea hacer: 1. Cifrar 2. Descifrar. Se guarda la respuesta del usuario en una variable.

##### Paso 2. Se inicia un ciclo do-while. Dentro del do se establecen condiciones a través de un if anidado:

###### 1 condición (if). Si el usuario no ingreso un campo vacío se continua adelante.

###### 2 condición (if). Si el usuario entrega la opción cifrar, se le pregunta que palabra desea encriptar y se llama a la función cipher. Se retorna un alert con la palabra encriptada.

###### 3 condición (else if). Si el usuario entrega la opción descifrar, se le pregunta que palabra desea desencriptar y se llama a la función decipher. Se retorna un alert con la palabra desencriptada.

###### 4 condición (else). Si el usuario ingresa un campo invalido se retorna un alert que dice "Ingrese una opción válida" y se le continuara preguntando que desea hacer hasta que ingrese una opción válida.

##### Paso 3. Después del ciclo do-while se ubican las funciones cipher y decipher, las que son llamadas durante el ciclo.

###### Función cipher. Se inicia con una variable de tipo array vacía donde se guardarán los valores en el código ascii para cada carácter de la palabra ingresada (var arrayASCII). Además, se crea una variable donde se guardará el resultado del mensaje cifrado. A través de un for se itera a través de la palabra para obtener el código ASCII de cada carácter. Se almacenan los elementos en el array vacío. Se aplica formula cifrado de cesar sobre cada elemento del array para obtener el nuevo código ASCII y se convierten estos valores a los caracteres correspondientes. Se almacena la información en la variable cipherPhrase y se retorna el nuevo mensaje encriptado, cerrando la función.

###### Función decipher. De manera similar que la anterior, se inicia con una variable de tipo array vacía donde se guardaran los valores en el código ascii para cada carácter de la palabra ingresada (var arrayASCII). Además, se crea una variable donde se guardará el resultado del mensaje descifrado. A través de un for se itera a través de la palabra para obtener el código ASCII de cada carácter. Se almacenan los elementos en el array vacío. Se aplica formula cifrado de cesar sobre cada elemento del array para obtener el nuevo código ASCII y se convierten estos valores a los caracteres correspondientes. Se almacena la información en la variable decipherPhrase y se retorna el nuevo mensaje desencriptado, cerrando la función.

###### Diagrama de Flujo

![](http://www.nedgrafica.cl/andrea/cifradoCesar-andreaDiaz.png)
