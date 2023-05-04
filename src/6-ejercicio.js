//const { default: Swal } = require("sweetalert2");
import Swal from "sweetalert2";


let entero= prompt("Ingrese un numero para verificar si es par o inpar");



const operacion= (entero)=>{
   
    if (entero%2==0){
      Swal.fire('Resultado',`el numero ${entero} es par`,'info');
    }else{
      Swal.fire('Resultado',`el numero ${entero} es inpar`,'info');
    }
 
  
   
}

entero = parseInt(entero);

if (entero!=0){
   operacion(entero);
}else{
   Swal.fire('Resultado',`el numero ${entero} no es par ni  inpar`,'info');
}





//
