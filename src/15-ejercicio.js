//const { default: Swal } = require("sweetalert2");
import Swal from "sweetalert2";
const PI=3.14
const Circulo ={
  radio:0,
  perimetro:0,
  area:0,

}
const perimetro = (r)=>{
  return 2 * PI * r
}
const area = (r)=>{
  return PI*(r*r)
}

Circulo.radio=parseInt( prompt('ingrese radio del circulo'))
Circulo.perimetro =perimetro(Circulo.radio)
Circulo.area= area(Circulo.radio)




Swal.fire("Resultado", `el perimetro es  ${Circulo.perimetro}  el area es ${Circulo.area}`,'success')












//
