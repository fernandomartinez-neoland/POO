import { Telefono, Parametro } from "./clases.js";

// con esto creamos un nuevo objeto de tipo "telefono" el cual previamente lo creamos desde clases.js, este no representa directamente el objeto, mas bien una copia
const objeto= new Telefono();

// el console.log que tiene "llamada" se ejecuta por si solo al llamar al objeto y luego como a un json ir directo al metodo como si se tratase de una propiedad (porque lo es)
objeto.llamada();
console.log(objeto.peso)

// //////////////////////////////

const suma=new Parametro();

// para enviar un parametroa  un metodo, primero se debe llegar a el a traves del objeto como si se tratase de un json y luego enviarle los paramtros de la misma manera que se hace con una funcion
suma.suma(4, 5)
