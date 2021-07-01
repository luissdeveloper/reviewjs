// # JS
// ; opcional
// tipado dinamico
// guarda el tipo en el valor y no en la variable

// # PALABRAS RESERVADAS

// # VARIABLES
// const, var, let
// Puede ser creada sin asignarle valor
// podemos reasignar variables (const, let)
// no pueden iniciar con numeros
// $, _, 
// Estilos: underscore, Camelcase, PascalCase ( para clases)


/*```var producto1 = 'computadora'
    producto2 = 'monitor';

console.log(producto1);```*/

// let
// 


// ## const
// $, alfabetico, -,_
// no se pueden iniciar variables sin valor
// no se puede reasignar

// # TIPOS DE DATOS

// ## String
// '',""

// const nombre='luis';
// const nombre2= String('alberto');
// // El constructor va ha generar un obj
// const nombre3= new String('Cristina');

// console.log(typeof(nombre),typeof(nombre2),nombre3);



// ### Metodos para string

// const producto='chocolate';

// length: no lleva parentesis
// console.log(producto.length);

// indexof: retorna la posición
// console.log(producto.indexOf('a'));

// include: retorna true o false
// console.log(producto.includes('a'));


// ## NUMEROS Y OPERADORES
// No se necesita especificar si es flotante, entero...
// +,-,/,*,%

// const numero1 = 100;
// const numero2 = 200;

// console.log( numero1 * numero2 );
// console.log( numero1 % numero2 );

// **NOTA**: Los numeros en la consola se ven de otro color


// ### Objeto Math
// resultado = Math.PI;
// resultado = Math.round(2.5); 
// resultado = Math.ceil(2.1); // redondea hacia arriba
// resultado = Math.floor(2.3), // redondea hacia abajo
// resultado = Math.sqrt(144) ;
// resultado = Math.abs(-200);
// resultado = Math.min(3,5,6,2,5,6);
// resultado = Math.max(3,5,6,2,5,6);
// resultado = Math.random();
// resultado = Math.floor(Math.random() * 3);
// console.log(resultado);
// console.log('ok');


// ## ORDEN DE LAS OPERACIONES
// let resultado;
// resultado = 30 + 30 -2;
// descuento = (30 + 30 - 2)*0.2;

// console.log(resultado, descuento);

// ## INCREMENTOS 

// let puntaje = 10;
// puntaje++;
// console.log(puntaje++);
// console.log(puntaje)

// console.log(--puntaje);
// console.log(puntaje--);
// console.log(puntaje);


// ## CONCATENACIÓN
// const nombre = 'luis';
// const correo = 'luis@gmail.com'

// console.log(nombre+' '+correo)

// ## TEMPLATE STRING
// const nombre = 'luis';
// const correo = 'luis@gmail.com'
// console.log(`${nombre} y su correo es ${correo} `);

// ## BOOLEANS
// true, false

// const primero = true;
// const segundo = false;

// console.log(typeof(primero));

// const boolean3 = Boolean(true);
// console.log(typeof(boolean3));

// ## OBJECTS
// const nombreProducto = 'Monitor';
// const marca = 'LG';
// const tamaño = '21';

// const producto = {
//     nombreProducto : 'Monitor',
//     marca : 'LG',
//     tamaño : '21',
// }

// console.log(producto);

// ### Sintaxis de punto

// console.log(producto.nombreProducto);

// console.log(producto['nombreProducto']);

// ###  Agregar nuevas propiedades

// const producto = {
//     nombreProducto : 'Monitor',
//     marca : 'LG',
//     tamanio : '21',
// }

// producto.anioFabricacion = 2012;
// console.log(producto);

// ### Eliminar producto
// delete producto.tamanio;
// console.log(producto);

// ### Crear variables a partir de propiedades del objeto
// const producto = {
//     nombreProducto : 'Monitor',
//     marca : 'LG',
//     tamanio : '21',
// }
// let marca = producto.marca;
// console.log(marca)

// ### Destructuring de objetos

// const { nombreProducto, tamanio } = producto

// console.log( nombreProducto, tamanio );

// ## OBJECT METHODS

// ### use strict
// Ejecuta js y al tener error corta el flujo del programa

// 'use strict'

// const producto = {
//     nombreProducto : 'Monitor',
//     marca : 'LG',
//     tamanio : '21',
// }

// ### Metodo freeze
// Evita añadir, modificar y eliminar propiedades

// Object.freeze( producto );

// producto.anioFabricacion = 2012;
// console.log(anioFabricacion)

// ### Metod seal
// Evita borrar y añadir propiedades
// Permite modificar propiedades existentes

// Object.seal( producto );

// producto.marca = 'Samsung';
// console.log(producto.marca);

// ### Metodo isFrozen
// Verifica si un objeto tiene "freeze"
// console.log(Object.isFrozen( producto ));


// ## COMO UNIR DOS OBJETOS

// const producto = {
//     nombreProducto : 'Monitor',
//     marca : 'LG',
//     tamanio : '21',
// }

// const medidas = {
//     peso : '1Kg',
//     medida : '120cm' 
// }

// **BP**: Mantener los datos originales. 

// ### Rest operator
// const nuevoProducto = {...producto,...medidas};
// console.log(producto);
// console.log(nuevoProducto);

// ## ARREGLOS
// Listar elementos del mismo tipo o relacionados
// Podemos mezclar todo tipo de datos
// const numeros = [1,2,3,4,5];
// console.log(numeros);
// console.table(numeros);

// const dias = Array('Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo');
// console.table( dias );

// ### Acceder a los valores de un arreglo
// const numeros = [1,2,3,4,5];
// console.log( numeros[0] );

// metodo length

// console.log( numeros.length );

// forEach
// const numeros = [1,2,3,4,5];
// numeros.forEach(function(numero){
//     console.log( numero );
// })

// ## ARRAYS METHODS
// const numeros = [1,2,3,4,5];

// Añadir elementos
// No es un método
// numeros[5]=6;
// console.log(numeros);

// Modificar elementos
// numeros[5]=7;
// console.log( numeros );

// ### Metodo push
// Agrega al final
// numeros.push(8);
// console.log( numeros );

// *BP*: Se recomienda no modificar los arreglos. Entonces hay que tener cuidado de usar push()

// ### Metodo unshift
// Agrega al inicio
// numeros.unshift(0);
// console.log(numeros);

// ### Metodo push
// Elimina el ultimo elemento
// numeros.pop();
// console.log(numeros);

// ### Metodo shift
// Elimina el primer elemento
// numeros.shift();
// console.log(numeros);

// ### Metodo splice
// Elimina una cantidad de elementos desde un inicio
// numeros.splice(2,1);
// console.log(numeros);

// *BP*: Se recomienda no modificar los arreglos. Entonces hay que tener cuidado de usar push()

// *BP*:BUENA PRACTICA CREAR UNA COPIA DEL ARREGLO EN VEZ DE MODIFICAR
// Es mejor utilizar el spread operator

// para añadir un elemento como lo hace push
// nuevoArreglo = [...numeros, 9];
// console.log(nuevoArreglo);

// para añadir un elemento al principio como lo hace unshift
// nuevoArreglo2 = [ 10,...numeros ];
// console.log( nuevoArreglo2 );

/*```const numeros = ['lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo'];
console.log(numeros);

const carrito = [
    {nombre:'Monitor', precio:500},
    {nombre:'Teclado', precio:1000},
    {nombre:'Mouse', precio:700},
    {nombre:'CPU',precio:10000}
]```*/

// ### forEach
/*```numeros.forEach(function(dia){
    console.log(dia);
})

numeros.forEach(function(dia){
    if (dia === 'Martes'){
        console.log(`Èl dia ${dia} existe`);
    }
});```*/

// ### includes
// Funciona bien en un arreglo plano, pero no funciona bien en una arreglo de objetos
/*```verificacionDia=numeros.includes('Miercoles');
console.log(verificacionDia);```*/

// ### some
// Funciona bien para arreglos de objectos
// verificacionProducto = carrito.some(function(producto){
//     return producto.nombre === 'Mouse';
// })

/*```verificacionProducto = carrito.some(producto =>  producto.nombre === 'Mouse');
console.log(verificacionProducto);```*/

// calcular el total a pagar en el carrito
// acumulador = 0
// let totalPagar = carrito.forEach(function(producto){
//     acumulador = acumulador + producto.precio;
//     return acumulador;
// });
// console.log(acumulador);

// ### Metodo reduce
// totalPagar = carrito.reduce(function(total,producto){
//     return total + producto.precio;
// },0)

// console.log(totalPagar);

// ### Filter
/*```filtro = carrito.filter(function(producto){
    return producto.precio > 700;
})

console.log(filtro);```*/

// ## FUNCTIONS
// Serie de procediemeintos que realizan una accion
// Codigo reutilizable
// Organnizacion

// ### Function Declaration
/*```function sumar(numero){
    console.log(numero+20);
}

sumar(10);```*/

// ### Function Expressions
/*```const multiplicar = function multiplicar(numero1,numero2){
    console.log(`La multiplicacion de ${numero1}*${numero2} es =${numero1*numero2}`)
}

multiplicar(2,4);```*/

// Con arrow functions
/*```const multiplicar = (numero1,numero2) => {
    console.log(`La multiplicacion de ${numero1}*${numero2} es =${numero1*numero2}`);
}

multiplicar(2,4);```*/

// ### IIFE
// Sirven para proteger las variables cuando usamos varios archivos js
/*```(function(){
    console.log('Function IIFE');
})();```*/


// **JQ**: Que es hoisting
// Hoisting es el proceso que hace JS, en el cual en la primera vuelta(creación) realiza la creacion de funciones y en la segundo el llamado. Habla del contexto de ejecución en  JS
// Una caracteristica de las funciones es que la creamos y la mandamos a llamar
// Las function expressions generan el error al llamarlas antes de la declaracion
/*```suma();
function suma(){
    console.log(2+2);
}```*/


// ## DIFERENCIA ENTRE METODO Y FUNCIÓN

// ### Metodo
// // variable.nombre_metodo()
// ### Función
// // nombreFuncion()

// ## FUNCIONES CON PARAMETROS Y ARGUMENTOS
/*```function suma(numero1,numero2){ // parametros
    console.log(numero1 + numero2);
}

suma(10,10); // Argumentos```*/

// Parametros por default
/*```function suma(numero1=1,numero2=10){ // parametros
    console.log(numero1 + numero2);
}

suma(); // Argumentos```*/

// ## FUNCIONES QUE RETORNAN VALORES
/*```function suma(n1,n2){
    return n1 + n2;
}

const resultado = suma(10,2);
console.log(resultado);```*/


/*```let total = 0;

function agregarCarrito(precio){
    return total += precio;
}

function calcularImpuesto(total){
    return total *1.15;
}

total = agregarCarrito(200);
total = agregarCarrito(1200);
total = agregarCarrito(2200);

console.log(total);

totalAPagar = calcularImpuesto(total);
console.log(totalAPagar);```*/


// ## METODOS DE PROPIEDAD
// Sintaxis de metodo, pero siguen siendo funciones


/*```const reproductor = {
    reproducir : function(id){
        console.log(`Estoy reproduciendo la cancion numero ${id}`);
    },
    pausar : function(){
        console.log('pausando')
    },
    crearPlayList : function(nombre){
        console.log(`Se creo el playlist con el nombre ${nombre}`);
    },
    reproducirPlayList : function(nombre){
        console.log(`Reproduciendo playlist: ${nombre}`)
    }
}

reproductor.reproducir(36);
reproductor.pausar();
reproductor.crearPlayList('nueva');
reproductor.reproducirPlayList('nueva');```*/


// ## ARROW FUNCTIONS
// Sirven para functions expressions
// Sin el function
// () => {}
// Una sola línea las llaves son opcionales
// Cuando hay un solo parametro el () de los parametros es opcional
// Con una sola línea el return se elimina, se da por implícito

/*```const dias = ['Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo'];

dias.forEach(dia =>{
    if (dia == 'Martes'){
        console.log('Marzo sí existe');
    }
})```*/


// ## ESTRUCTURAS DE CONTROL

// ### IF

/*```const puntaje = 1001;

if (puntaje !== 1000){
    console.log('puntaje es mil');
}else{
    console.log('No es igual');
}```*/

// ### SWITCH

/*```const metodoPago = 'tarjeta';

switch (metodoPago){
    case 'tarjeta':
        console.log('Pagaste con tarjeta');
        break;
    case 'cheque':
        console.log('Revisaremos los fondos primero');
        break;
    default:
        console.log('Metodo de pago invalido');
        break;
}
```*/

// ### ITERADORES
// #### For loop

/*```for (let i = 0; i < 10; i++){
    console.log(i);
}```*/

/*```for (let i=1; i <= 100; i++){
    if (i % 2 === 0){
        console.log(`${i} es par`);
    }else{
        console.log(`${i} es impar`);
    }
}```*/

/*```const carrito = [
    {nombre:'Monitor', precio:500},
    {nombre:'Teclado', precio:1000},
    {nombre:'Mouse', precio:700},
    {nombre:'CPU',precio:10000}
]

for (let i = 0; i < carrito.length; i++){
    console.log(carrito[i].nombre);
}```*/

// #### While loop

/*```const carrito = [
    {nombre:'Monitor', precio:500},
    {nombre:'Teclado', precio:1000},
    {nombre:'Mouse', precio:700},
    {nombre:'CPU',precio:10000}
]

let i = 0; // indice

while( i < 10){ // condicion
    console.log(i);
    i++; // incremento
}```*/


// #### Do While loop

/*```let i = 101;

do{
    console.log(i)
    i++;
}while(i < 100);```*/

// *JQ*: Diferencia entre while y do while

// #### forEach
// Para arreglos
/*```const carrito = [
    {nombre:'Monitor', precio:500},
    {nombre:'Teclado', precio:1000},
    {nombre:'Mouse', precio:700},
    {nombre:'CPU',precio:10000}
]

carrito.forEach(item => console.log(item.nombre));```*/

// #### map
/// para arreglos
/*```const carrito2 = carrito.map(producto => `${producto.nombre} - ${producto.precio}`);
console.log(carrito2);```*/

// *BP*: Diferencia entre forEach y map
// forEach para cuando queremos imprimir en consola o en document
// map para crear un nuevo arreglo

// ## THIS EN JS
// Hace referencia al mismo objeto en contexto
// Sí utilizamos un arrow function, this va ha hacer referencia a "window"

/*```const reservacion={
    nombre:'luis',
    apellido: 'sanchez',
    total: 5000,
    pagado: false,
    informacion : function(){
        console.log(`${this.nombre} reservo y ha pagado $ ${this.total}`);
    }
}

reservacion.informacion();```*/

// *JQ*: A que hace referencia this


// ## OBJECT LITERAL
// POO
// Aqui le pasamos los valores directamente
/*```const reservacion={
    nombre:'luis',
    apellido: 'sanchez',
    total: 5000,
    pagado: false
}

reservacion.informacion();```*/


// ## OBJECT CONSTRUCTOR
// Se usaban como clases o generadores de objetos en JS anterior
// POO
// Es más dinamico
// Debe tener todos los valores que forman parte del objeto
// Se usa PascalCase

/*```function Producto(nombre,precio,disponible){
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
}

// La ventaja es que podemos instanciar
const product2 = new Producto('Monitor LG de 22 pulgadas',300000, true);
const product3 = new Producto('Monitor Samsung de 19 pulgadas',350000,false);
console.log(product2,product3);
```*/

// ## PROTOTYPES
// Funciones asociadas a un tipo de objeto
// Deben ser functions declarations
// Recordar que los objects constructor funcionan como clases, pero no son clases reales
// Esta es la forma antigua de como se hacian las clases

/*```function Boleta(nombre,apellido,total,pagado){
    this.nombre   = nombre,
    this.apellido = apellido,
    this.total    = total,
    this.pagado   = pagado  
}

function Reservacion(nombre,apellido,total,pagado){
    this.nombre   = nombre,
    this.apellido = apellido,
    this.total    = total,
    this.pagado   = pagado  
}

Reservacion.prototype.informationReservation = function(){
    console.log(`Ha hecho una reserva a nombre de ${this.nombre} ${this.apellido}`);
}

const boleta1 = new Boleta('luis','Sanchez',10000,true);
const reservacion1 = new Reservacion('luis','Sanchez',10000,true);

reservacion1.informationReservation();
console.log(reservacion1);
boleta1.informationReservation();
console.log(boleta1);```*/

// *BP*: Como crear un prototype para un objeto.

// ## POO - CLASSES
// ES6(2015)
// PascalCase
// Se pasan los parametros a traves de un constructor

/*```class Producto {
    constructor(nombre,precio){
        this.nombre = nombre,
        this.precio = precio
    }

    formatearProducto(){
        console.log(`El producto: ${this.nombre} tiene un precio de = $ ${this.precio}`); 
    }

    precioProducto(){
        console.log(`El precio es = $ ${this.precio }`)
    }
}

const producto1 = new Producto('Monitor',200000);
console.log(producto1);
producto1.formatearProducto();
producto1.precioProducto();
```*/


// ## POO - HERENCIA
// palabras claves : extends y super


// Ejemplo 1:

/*```class Producto {
    constructor(nombre,precio){
        this.nombre = nombre,
        this.precio = precio
    }

    informacionProducto(){
        // Ojo al usar aquí console.log puede dar undefined
        return `nombre: ${this.nombre} y el precio pagado es: ${this.precio}`;
    }
}

class Boleta extends Producto {
    constructor(nombre,precio,estadio){
        super(nombre,precio);
        this.estadio = estadio
    }

    informacionProducto(){
        // console.log(`nombre: ${this.nombre} y el precio pagado es: ${this.precio} y el estadio es el: ${this.estadio}`);
        // Ojo al usar aquí console.log puede dar undefined
        return `${super.informacionProducto()} y el estadio es el: ${this.estadio}`;
    }
}

const producto1 = new Producto('Nevera Haceb',1200000);
producto1.informacionProducto();

const boleta1 = new Boleta('oriental',140000,'Metropolitano');
console.log(boleta1.informacionProducto());```*/

// Ejemplo 2: 

/*```class categoriaProductos{
    constructor(nombre,almacen){
        this.nombre  = nombre;
        this.almacen = almacen;
    }

    informacionCategoriaProductos(){
        return `La categoria ${this.nombre} pertenece al almacen ${this.almacen}`;
    }

    // En caso tal de que tenga console.log
    obtenerAlmacen(){
        console.log(`Èl almacen es: ${this.almacen}`)
    }
}

class categoriaServicios extends categoriaProductos{
    constructor(nombre,almacen,precio){
        // this.nombre  = nombre;
        // this.almacen = almacen;
        super(nombre,almacen);
        this.precio  = precio;
    }

    informacionCategoriaServicios(){
        // return `La categoria ${this.nombre} pertenece al almacen ${this.almacen} y el precio es de = ${this.precio}`;
        return `${super.informacionCategoriaProductos()} y el precio es de = ${this.precio}`;
    }

    // En caso tal de que tenga console.log y querer reescribirla, en estos momentos todavía me salta "undefined" ???
    obtenerAlmacen(){
        super.obtenerAlmacen();
        console.log('Terminado')
    }
}

categoria1 = new categoriaProductos('abarrotes','San Francisco');
console.log(categoria1);
console.log( categoria1.informacionCategoriaProductos() );
categoria1.obtenerAlmacen();

servicios1 = new categoriaServicios('Luz Electrica','Piedecuesta','3000000');
console.log(servicios1);
console.log( servicios1.informacionCategoriaServicios() );
console.log( servicios1.obtenerAlmacen() );```*/


// ## TRY CATCH
// En JS al tener un error en el código se detiene la ejecución
// No se debe usar en todo el codigo, sino en situaciones puntuales: error de inicio de sesion, datos invalidos y situaciones de interes
// Se usa para situaciones con datos invalidos y para imprimir un error

/*```numero = 7;

try{
    if (numero == numero2){
        console.log(numero);
    }
}catch(error){
    console.log(error);
}```*/

// ## PROMISES EN JS
// Es un objeto
/// Una promesa pendiente puede ser cumplida con un valor, o rechazada con una razón (error)
// 

// Ojo con el termino función callback, que habla de funciones que se pasan como argumentos

// ### Metodos de las promesas
// Refleja un valor que va ha estar disponible ahora, en un futuro o nunca
// - Promise.all(iterable)
// - Promise.race(iterable)
// - Promise.reject(reason)
// - Promise.resolve(value)
// Enlace: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise

// ### Estados de las promesas
// Pending: No se ha cumplido y tampoco se ha rechazado
// Fulfilled: Ya se cumplió
// Rejected: Se ha rechazado o no se pudo cumplir

/*```const usuarioAutenticado = new Promise((resolve,reject) => {
    const auth = false;

    if (auth){
        resolve('Usuario autenticido'); // El promise se cumple
    }else{
        reject('Datos invalidos'); // El promise se rechaza
    }
});

console.log( usuarioAutenticado );
// **NOTA**: Los estados son los que nos encontramos al acceder a una API
// **OJO**: Sí solo se ve en la consola "promise{<reject>:}" o algo parecido quiere decir que nos falta un paso

usuarioAutenticado
    // El valor que se le pasó al resolve() arriba podemos pasarlo al resolve en el then:
    .then(function(resultado){
        // console.log('Desde el promise');
        console.log(resultado);
    })
    .catch(function(error){
        console.log(error);
    })
```*/

/*```let miPrimeraPromise = new Promise((resolve, reject) => {
    // Llamamos a resolve(...) cuando lo que estabamos haciendo finaliza con éxito, y reject(...) cuando falla.
    // En este ejemplo, usamos setTimeout(...) para simular código asíncrono.
    // En la vida real, probablemente uses algo como XHR o una API HTML5.
    setTimeout(function(){
      resolve("¡Éxito!"); // ¡Todo salió bien!
    }, 250);
});
  
miPrimeraPromise.then((successMessage) => {
    // succesMessage es lo que sea que pasamos en la función resolve(...) de arriba.
    // No tiene por qué ser un string, pero si solo es un mensaje de éxito, probablemente lo sea.
    console.log("¡Sí! " + successMessage);
});```*/

// ## NOTIFICATION API
// Apis modernas
// Seleccionar un elemento para mostrar una notificacion ???
// Trabajamos con e evento click u otro
// Las apis modernas de js ya manejan promises, no nos debemos preocupar por resolve y reject

// Ejemplo con este codigo podemos indicarle al usuario a traves de la notification api sí permite notificaciones y en caso de que lo permite pues le enviamos una notificacion

/*```const boton = document.querySelector('#api');
boton.addEventListener('click',function(){
    Notification.requestPermission()
        .then(resultado => console.log(`Ell resultado es ${resultado}`)); 
});

if (Notification.permission == 'granted'){
    // Recibe dos parametos: un titulo y un objeto
    new Notification('Esta es una notificacion',{
        icon:'img/logo.png',
        body: 'Ideas Llaneras'
    })
}
```*/


// ## ASYNC AND AWAIT
// Base de todo desarrollo moderno

/*```function descargarNuevosCllientes(){
    return new Promise( resolve => {
        console.log('Descargando clientes');

        setTimeout( ()=>{
            console.log('Los clientes fueron descargados');
        },5000);
    })
}

// En la anterior función hay un punto critico, ya que puede que no nos descargue los clientes
// Necesito una función para "async"

async function app(){
    try{
        const resultado = await descargarNuevosCllientes();
        // Codigo bloqueado
        mostrarClientes(resultado);
        // Aquí el codigo se bloquea hasta que se resuelva la función anterior
        console.log('Este codigo se bloquea');
    }catch(error){
        console.log(error);
    }
}

app();

// Este codigo no se bloquea
console.log('Este codigo no se bloquea');```*/


// *JQ*: EJECUTAR DOS TAREAS AL MISMO TIEMPO, MIREMOS COMO SE HACE:

/*```function descargarNuevosClientes(){
    return new Promise( resolve => {
        console.log('Descargando clientes');

        setTimeout( ()=>{
            console.log('Los clientes fueron descargados');
        },5000);
    })
}

function descargarNuevospPedidos(){
    return new Promise( resolve => {
        console.log('Descargando pedidos');

        setTimeout( ()=>{
            console.log('Los pedidos fueron descargados');
        },3000);
    })
}```*/

// La forma incorrecta

/*```// async function app(){
//     try{
//         const resultado = await descargarNuevosClientes();
//         // Aquí se presentará una oportunidad, debido a que pensamos que se van ha ejecutar al mismo tiempo, pero no es así. Aquí se ejecutará primero "const resultado..."  y despues "const resultadoPedidos..."
//         const resultadoPedidos = await descargarNuevospPedidos();
//         mostrarClientes(resultado);
//         console.log('Este codigo se bloquea');
//     }catch(error){
//         console.log(error);
//     }
// }```*/

// La forma correcta
/*```async function app(){
    try{
        const resultado = await Promise.all([descargarNuevosClientes()],[descargarNuevospPedidos()]);
        // Codigo bloqueado
        mostrarClientes(resultado);
        // Aquí el codigo se bloquea hasta que se resuelva la función anterior
        console.log('Este codigo se bloquea');
    }catch(error){
        console.log(error);
    }
}

app();

// Este codigo no se bloquea
console.log('Este codigo no se bloquea');```*/

// ## FETCH API
// El reemplazo a Ajax(XMLHttpRequests)
// Envia los datos y los procesa detras escena
// Obtener un archivo local
// **NOTA**: Hasta el momento no hemos visto el backend, por lo tanto no podemos a realizar
// Consulta debe estar en JSON o txt plano

// JSON: Lenguaje de transporte de datos
// La gran mayoria de lenguajes pueden crear una respuesta en JSON para que los podamos manipular.
// Json se puede consumir en JS por medio Fetch API

// Una base de datos generará una respuesta similar a la de empleados.json. Mejor dicho estamos simulando una base de datos con JSON

/*```function obtenerEmpleados(){
    // Buenas practicas de nombres
    const archivo = "empleados.json";
    // ejemplo con url
    // fetch('http://www.google.com/api');
    // utiliza promises
    // Esto genera un estado que podemos ver en consola, sea: 200,404...
    // También podemos ver si es texto o json
    fetch(archivo)
        .then(resultado =>{
            // console.log( resultado );
            // La respuesta se imprimer como Array
            return resultado.json();
            // La respuesta se imprime como texto
            // return resultado.text();
        })
        .then( datos => {
            //console.log(datos);
            // Accedemos a los datos a traves de destructuring
            const {empleados} = datos;
            console.log(empleados);
            // empleados.forEach((empleado)=>{
            //     console.log(empleado.nombre);
            //     document.querySelector('.prueba-usuarios').textContent += empleado.nombre;
            // })

        })
}

obtenerEmpleados();```*/


// ## FETCH API - CON ASYNC Y AWAIT

/*```async function obtenerEmpleados(){
    // Buenas practicas de nombres
    const archivo = "empleados.json";
    
    const resultado = await fetch(archivo);
    // Para este codigo necesitamos que el anterior se ejecute.
    const datos = await resultado.json();
    console.log(datos);
}

obtenerEmpleados();```*/
