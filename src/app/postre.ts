import { Receta } from "./receta";

export interface Postre {
    id: number;
    nombre: string;
    precio: number;
    stock: number;
    imagen: string;
    recetas: Receta[];
}
