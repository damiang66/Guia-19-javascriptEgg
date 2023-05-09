//const { default: Swal } = require("sweetalert2");
import Swal from "sweetalert2";

const libro ={
  id:'',
  titulo:"",
  autor:{

nombre:''

  },
  pagina:0,
}
const pedirDatos=()=>{
  libro.id= prompt('ingrese el iSBN');
  libro.titulo= prompt('ingrese el titulo');
  libro.autor.nombre= prompt('ingrese nombre de autor');
  libro.pagina= prompt('ingrese el total de paginas');
  }
  const mostrar=(l)=>{
    return l;
  }
  pedirDatos();
  console.log(mostrar(libro)); 




Swal.fire("Resultado", `el ISBN es ${libro.id} el titulo es ${libro.titulo}
 el autor es ${libro.autor.nombre} la cantidad de paginas es ${libro.pagina}`,'success')












//
