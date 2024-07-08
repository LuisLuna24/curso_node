
//!Tipos de Datos==============================================
//Datos Primitivos : string, number, boolean

/*let nombre:string;
nombre= "Luis";

let numero: number;
numero= 10;

let userExist: boolean;
userExist= true;

console.log(`Hola ${nombre} ${numero} `);*/
/*
let frutas;
frutas = ["Manzana", "Pera", "Uva"];

let verduras;
verduras = [...frutas];	
frutas.push("Naranja");

verduras .forEach((value,i,array)=>{
    console.log({value});
});

const newArray =verduras.map((verdura)=>{
    console.log(verdura);
    return verdura;
} )*/

//!Sacar promedio generar===============================================
/*
const calificaciones = [98, 78, 83, 73, 90];

let suma = 0;
for (let i = 0; i < calificaciones.length; i++) {
    suma += calificaciones[i];
}
let promedioFinal = suma / calificaciones.length;
console.log(`Promedio ${promedioFinal}`);

let total: number = 0;
calificaciones.forEach((calificacion, i, array) => {
    total += calificacion;
});
console.log(total / calificaciones.length);

*/
//!Objetos==================================================
/*
//* Importacion para tipado de datos este es recomendable colocar al princioio del codigo 
import {PersonaProps} from "./interfaces/interface";


//*objeto tipado a trabes de personaprops que se encuentra en la carpeta interfece
const persona:PersonaProps = {
    nombre: "Luis",
    apellido: "Garcia",
    edad: 30,
    estudiante: true,
    direccion: {
        calle: "Calle 123",
        numero: 456
    }
}

const { nombre, edad, estudiante,direccion } = persona;
console.log(nombre, edad, estudiante,direccion);
*/

//!Funciones================================================================================================

function saludar(user: string) : string {
    //console.log("Hola " +  user);
    return "Hola " + user;
}

const saludarArrow = (user: string) : string => {
    return "Hola " + user;
}

let respuesta: string= saludar("Luna");

console.log(respuesta);