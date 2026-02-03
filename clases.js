export class Telefono{
    constructor(){}//solo se usa constructor si la clase va a recibir parametros ya que este es quien los recibe e interactua con ellos y los hace accesible para el resto de la clase
    peso="10kg";
    llamada(){
        console.log(this.peso)
    }
}