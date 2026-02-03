export class Telefono {
  constructor() {} //solo se usa constructor si la clase va a recibir parametros ya que este es quien los recibe e interactua con ellos y los hace accesible para el resto de la clase
  peso = "10kg";
  llamada() {
    console.log("Haciendo llamada...");
  }
}

// /////////////parametros en metodos/////////////////

export class Parametro {
  constructor() {}

  //   los metodos pueden recibir parametros como si se tratase de una funcion comun y corriente
  suma(a, b) {
    console.log(a + b);
  }
}

// /////////////parametros a clases/////////////////

export class Operaciones {
  // el constructor se encarga de recibir los parametros y los pone a disposicon del resto de la clase
  // las variables y metodos creados dentro de la clases UNICAMENTE EXISTEN DENTRO DE LA CLASE
  // para acceder a los metodos y variables de la clase primero se debe acceder a la clase y recorrerlo de la misma manera que se recorre un json
  constructor(a, b) {
    this.numA = a;
    this.numB = b;
  }

  suma() {
    console.log(this.numA + this.numB);
  }

  resta() {
    console.log(this.numA - this.numB);
  }

  multiplicacion() {
    console.log(this.numA * this.numB);
  }

  division() {
    console.log(this.numA / this.numB);
  }
}


//////////////////////// herencia
export class Usuario extends Telefono {
  usar() {
    console.log("estoy usando el metodo 'usar()' del hijo")

    // "this" generalmetne se usa para acceder a las variables y metodos de la clase en la que nos encontramos, pero si esta clase es una clase "hijo", es decir que extiende (extends) de una clase padre entonces "this" se usa tambien para acceder a las variables y metodos de la clase padre
    this.llamada()
  }
}

/////////////////

export class Precibidor {
    constructor(nombre, apellido){
        this.nombre=nombre;
        this.apellido=apellido;
    }

    nombreHijo(){
        console.log("el nombre de mi hijo es: "+this.nombre+" "+this.apellido)
    }
}

export class Hrecibidor extends Precibidor{
    constructor(nombre,apellido){
        // en este ejemplo la clase Hrecibidor(hijo) recibe 2 parametros y con la palabra "super" le envia esos 2 parametros al padre (Precibidiro) y este los recibe en su propio constructor
        super(nombre, apellido)
        
    }
    

    nombrar(){
        console.log("hola")
        this.nombreHijo()
    }

}
