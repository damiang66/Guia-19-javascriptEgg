//const { default: Swal } = require("sweetalert2");
import Swal from "sweetalert2";


let letra= prompt("Ingrese la operacion a realizar");
let n= prompt("Ingrese el primer numero");
let n1= prompt("Ingrese el segundo numero");
//console.log(edad);


const operacion= (letra,n,n1)=>{
    
   switch (letra) {
    case "S":
        //Swal('Sumar'`${n1+n}`, 'info')
        return n+n1
     
        case "R":
      //  Swal('Restar'`${n-n1}`, 'info')
      return n-n1
     
        case "M":
       // Swal('Multiplicar'`${n*n1}`, 'info')
       return n*n1
        case "D":
       // Swal('Dividir'`${n/n1}`, 'info')
       return n/n1
   
    default:
        Swal('Error'`Ingrese una operacion valida`, 'error')
        break;
   }
  
   
}
letra=letra.toUpperCase()
n = parseInt(n);
n1= parseInt(n1)
console.log(letra);

let resultado=operacion(letra,n,n1);
Swal.fire('Resultado',`el resultado de la operacion es ${resultado}`,'info');
//
