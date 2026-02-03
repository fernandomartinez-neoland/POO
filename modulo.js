import { Telefono, Parametro, Operaciones, Usuario } from "./clases.js";

// con esto creamos un nuevo objeto de tipo "telefono" el cual previamente lo creamos desde clases.js, este no representa directamente el objeto, mas bien una copia
const objeto= new Telefono();

// el console.log que tiene "llamada" se ejecuta por si solo al llamar al objeto y luego como a un json ir directo al metodo como si se tratase de una propiedad (porque lo es)
objeto.llamada();
console.log(objeto.peso)

// /////////////parametros en metodos/////////////////

const suma=new Parametro();

// para enviar un parametroa  un metodo, primero se debe llegar a el a traves del objeto como si se tratase de un json y luego enviarle los paramtros de la misma manera que se hace con una funcion
suma.suma(4, 5)


// /////////////parametros a clases/////////////////

// podemos enviar parametros a objetos para que estos sean accedidos por todos los metodos y variables de la clase (el objeto)
const operaciones= new Operaciones(3, 7);

operaciones.suma();
operaciones.resta();

operaciones.multiplicacion();

operaciones.division();


// aunque se llame a la misma clase, el "new" hace referencia a que se esta creando un nuevo objeto con el mismo molde (misma clase), con lo cual, aunque se comporten de manera similar siguen siendo 2 objetos individuales
const nuevaO= new Operaciones(1, 2);

nuevaO.suma()

const persona= new Usuario();
// durante el uso de los metodos podemos acceder a los metodos del padre desde el uso de la clase del hijo, osea que si el hijo NO posee el metodo pero el padre si, entonces accedemos al metodo del padre usando al hijo.
persona.llamada();
persona.usar();