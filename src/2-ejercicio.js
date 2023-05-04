//const { default: Swal } = require("sweetalert2");
import Swal from "sweetalert2";


let radio= prompt("Ingrese el radio de una circunferencia");

const calcular= (radio)=>{
    let radion = parseInt(radio)
    let area= 3.14*(radion*radion)
    let perimetro = 2* 3.14*radion
  
    Swal.fire('Respuesta', `el perimetro es ${perimetro} el area es ${area}`,'info')
}
calcular(radio)



//
