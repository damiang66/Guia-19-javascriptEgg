//const { default: Swal } = require("sweetalert2");
import Swal from "sweetalert2";


let edad= prompt("ingrese su edad");
//console.log(edad);

const mayor= (edad)=>{
    console.log(edad);
    if(edad>18){
        Swal.fire('Respuesta', 'usted es mayor de edad', 'info')
    }else{
        Swal.fire('Respuesta', `su edad es ${edad} por lo tanto es menor de edad`,'info')
    }
  
   
}
edad = parseInt(edad)
mayor(edad);



//
