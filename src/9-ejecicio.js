//const { default: Swal } = require("sweetalert2");
import Swal from "sweetalert2";
let frase = prompt('Ingrese una frase');
let devolucion=""
for (let i = 0; i < frase.length; i++) {
 devolucion= devolucion +" "+frase.substring(i,i+1,);  
    
}

Swal.fire("Resultado", `la palabla queda ${devolucion}`)












//
