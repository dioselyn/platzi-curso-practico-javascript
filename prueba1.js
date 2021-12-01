//Determina el nombre y tipo de dato para almacenar en variables la siguiente información

var nombre = 'Dioselyn'; //string
var apellido =  'Colina'; //string
var usuario = 'developdctech'; //string
var edad = 30; //number
var correo = 'dioze09@gmail.com'; //string
var mayorEdad = true; //boolean
var dineroAhorrado = 100; //number
var deudas = 90; //number


//Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:
var nombreCompleto = nombre +' '+ apellido;
var dineroReal = dineroAhorrado - deudas;
console.log(nombreCompleto);
console.log(dineroReal);

// Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:

function presentacion(name, lastname, nickname ) {
   
    const completeName = name +" "+lastname;
    console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");

}

presentacion("Juan David", "Castro Gallego", "juandc");

// Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:

const tipoDeSuscripcion = "Basic";
if(tipoDeSuscripcion === 'Free'){
	console.log("Solo puedes tomar los cursos gratis");
} else if (tipoDeSuscripcion === 'Basic') {
	console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
} else if (tipoDeSuscripcion === 'Expert') {
	console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
} else if (tipoDeSuscripcion === 'Expert+') {
	console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
} else {
    console.error("Error");
    }

    //// Codigo solo con if
    const tipoDeSuscripcion = 'Basic';
    if (tipoDeSuscripcion === 'Free') {
      console.log('Solo puedes tomar los cursos gratis');
    } 
    if (tipoDeSuscripcion === 'Basic') {
        console.log('Puedes tomar casi todos los cursos de Platzi durante un mes');
    } 
    if (tipoDeSuscripcion === 'Expert') {
          console.log(
            'Puedes tomar casi todos los cursos de Platzi durante un año'
          );
    }
    if (tipoDeSuscripcion === 'Expert+') {
            console.log(
              'Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año'
            );
    }
 

//Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:

let i = 0;
 while ( i < 5) {
    console.log("El valor de i es: " + i);
    i ++ ;
 }

//

i = 10;

while (i >= 2) {
    console.log("El valor de i es: " + i);
    i--;
}

//Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.

let respuesta;
do {
 respuesta = Number(prompt("¿Cuanto es 2 + 2?"));
} while (respuesta !== 4);
if (respuesta === 4) {
 console.log ("Felicitaciones , Tu respuesta es correcta!!");
}


//crea una funcion que reciba como parametro un array e imprima su primer elemento

let frutas = ['pera', 'manzana', 'banana'];

function muestraPrimerElemento(array) {
   console.log(array[0]);
}

console.log(muestraPrimerElemento(frutas));

//3️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).

function muestraArray(array) {
    for(let i=0;i<frutas.length ; i++) {
        console.log(array[i]);
    }
}

muestraArray(frutas);

//Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).

var person = {
    firstname: 'Dioselyn',
    lastname: 'Colina',
    age: 30,
    gender: 'feminine'

}

function mostrarObjeto(objeto) {

    for (i in objeto) {
        console.log(` El elemento del objeto es ${i} con valor  ${objeto[i]}`);
      }

}

mostrarObjeto(person);