import Swal from "sweetalert2";


let letra= prompt("Ingrese la letra s o n");
//console.log(edad);

const mayor= (letra)=>{
    
    if(letra=='s'|| letra=='S' || letra=='n' || letra =='N'){
        Swal.fire('Respuesta', 'Correcto', 'info')
    }else{
        Swal.fire('Respuesta', `usted ingreso la letra ${letra} por lo tanto es icorrecto`,'info')
    }
  
   
}

mayor(letra);



//

