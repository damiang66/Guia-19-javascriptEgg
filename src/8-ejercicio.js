//const { default: Swal } = require("sweetalert2");
import Swal from "sweetalert2";
let cantidad=0;
let listaNumero=new Array();
let condicion = true;
do {
    let numero = prompt("ingrese un numero con 0 se sale")
    numero=parseInt(numero)
   
    
    if(numero!==0){
      console.log(true);
      condicion=true
      listaNumero.push(numero)
      cantidad++;
      
     
    }else{
      condicion=false
    }
  
    
  

} while (condicion==true);
let promedio =0;
listaNumero.forEach(e=>{
   promedio+=e;
})


let menor = Math.min(...listaNumero);
let mayor = Math.max(...listaNumero)

Swal.fire('Resultado', `el promedio es ${promedio/cantidad} el numero mayor es ${mayor} el numero menor es ${menor}` ,'success')

 

console.log(cantidad)
console.log(listaNumero);











//
