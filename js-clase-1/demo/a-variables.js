//- VAR vs LET
var saludarConVar = "hey, hola var --->";
let saludarConLet = "hey, hola let --->"

if (true) {
	var saludarConVar = "hey var, sobreescribo el mensaje <----";
	let saludarConLet = "hey let sobreescribo el mensaje <----";

   let mostrarMsj = "mostrar mensaje con let"
   console.log(mostrarMsj);

   console.log(saludarConLet);
   console.log(saludarConVar);
}

// console.log(mostrarMsj);

// console.log(saludarConVar);
// console.log(saludarConLet);

//- LET vs CONST
//LET
// let saludar = {
//    mensaje: 'Hola Let!'
// }
// console.log(saludar)
// saludar.mensaje = "Cambiando el mensaje",
// // saludar = {
// //    message : 'Hola Const'
// // }

// console.log(saludar)

// CONST
// const saludar = {mensaje: "Hola Let!"};
// console.log(saludar);

// saludar.mensaje = "Hola const!"
// console.log(saludar.mensaje);

// saludar = {message: "Hola Const"};
// console.log(saludar);
