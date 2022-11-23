import { Postre } from "./postre";

export interface Receta {
    id: number;
    postre: Postre;
    ingredientes: string;
    receta: string;
    tiempo: string;
    dificultad: string;
}
