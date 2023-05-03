//const { default: Swal } = require("sweetalert2");
import Swal from "sweetalert2";


let dato = prompt("como esta el dia hoy");
Swal.fire('Dato', `el dia hoy esta ${dato}`,'info')
