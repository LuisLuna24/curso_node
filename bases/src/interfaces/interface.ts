type Direccion={
    calle: string;
    numero: number;
}
//*Permite tipar a los objetos 
export interface PersonaProps {
    nombre: string;
    apellido: string;
    edad: number;
    estudiante: boolean;
    direccion: Direccion;
}