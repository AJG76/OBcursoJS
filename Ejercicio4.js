let nombre = 'Javier';
let apellido = 'Gustowski';

let estudiante = nombre.concat(' ',apellido);
console.log(estudiante);

let estudianteMayus = estudiante.toUpperCase();
console.log(estudianteMayus);
let estudianteMinus = estudiante.toLocaleLowerCase();
console.log(estudianteMinus);

let nroLetras = estudiante.length;
console.log(nroLetras);

let primerLetraNom = nombre.slice(0,1);
console.log(primerLetraNom);

let ultimaLetraApe = apellido.substring(apellido.length-1,apellido.length);
console.log(ultimaLetraApe);

let sinEspacios = estudiante.trim();
console.log(sinEspacios);

let val = estudiante.includes(nombre);
console.log(val);




