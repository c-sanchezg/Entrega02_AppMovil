import { StringLike } from "@firebase/util";

export interface Usuario{
    uid:string;
    name:string;
    lastname:string;
    gender:string;
    email:string;
    age:number;
    image:string;
    perfil:string;
    contraseña:string;
}

export interface User{
    id?:string;
    name:string;
    lastname:string;
    gender:string;
    email:string;
    age:number;
    tipo: string;
    telefono: number;
    direccion: string;
    comuna: String;
    image:string;
    contraseña:string;
}