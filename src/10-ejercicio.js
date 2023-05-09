//const { default: Swal } = require("sweetalert2");
import Swal from "sweetalert2";
let frase = prompt('Ingrese una frase');
const reves=(f)=>{
    return f.split("").reverse().join("")
}


Swal.fire("Resultado", `la palabla queda ${reves(frase)}`)












//
