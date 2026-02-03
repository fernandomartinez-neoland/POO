export class Telefono {
  constructor() {} //solo se usa constructor si la clase va a recibir parametros ya que este es quien los recibe e interactua con ellos y los hace accesible para el resto de la clase
  peso = "10kg";
  llamada() {
    console.log(this.peso);
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

export class Operaciones{
    // el constructor se encarga de recibir los parametros y los pone a disposicon del resto de la clase
    // las variables y metodos creados dentro de la clases UNICAMENTE EXISTEN DENTRO DE LA CLASE
    // para acceder a los metodos y variables de la clase primero se debe acceder a la clase y recorrerlo de la misma manera que se recorre un json
    constructor(a, b){
        this.numA=a;
        this.numB=b;
    }

suma(){
    
    console.log(this.numA+this.numB)
}

resta(){
    console.log(this.numA-this.numB)

}

multiplicacion(){
    console.log(this.numA*this.numB)

}

division(){
    console.log(this.numA/this.numB)

}


}