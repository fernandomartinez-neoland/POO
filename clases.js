export class Telefono {
  constructor() {} //solo se usa constructor si la clase va a recibir parametros ya que este es quien los recibe e interactua con ellos y los hace accesible para el resto de la clase
  peso = "10kg";
  llamada() {
    console.log(this.peso);
  }
}

export class Parametro {
  constructor() {}

//   los metodos pueden recibir parametros como si se tratase de una funcion comun y corriente
  suma(a, b) {
    console.log(a + b);
  }
}
