//const { default: Swal } = require("sweetalert2");
import Swal from "sweetalert2";

 let frase = prompt('Ingrese una frase para devolver la palabra mas larga');
const maslarga=(f)=>{
  let palabra = f.split(" ");
  let palabraL= "";
  for (let index = 0; index < palabra.length; index++) {
    if(palabra[index].length>palabraL.length){
      palabraL=palabra[index];
    }
    
  }
  return palabraL;

}
  


Swal.fire("Resultado", `la palabla mas larga seria ${maslarga(frase)}`)












//
