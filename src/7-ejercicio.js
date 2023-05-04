//const { default: Swal } = require("sweetalert2");
import Swal from "sweetalert2";


let limite= prompt("Ingrese el numero limite");
let total=0;
while (total<limite) {
   let numero = prompt("ingrese un numero hasta que la suma de ellos de el limite");
   console.log(total);
   numero = parseInt(numero);
   total+=numero;
}

Swal.fire("Resultado", `el limite era ${limite} y el acumulado fue de ${total}`,'info')










//
