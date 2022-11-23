import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RecetaDto } from './create-receta/receta.dto';
import { Receta } from './receta';

const URL = "http://localhost:3000/recetas";
@Injectable({
  providedIn: 'root'
})
export class RecetasDataService {

  constructor(private http: HttpClient) { }

   getAll=(): Observable<Receta[]> => {
    return this.http.get<Receta[]>(URL);
  } 
  
  create(receta:RecetaDto): Observable<Receta> {
   return this.http.post<Receta>(URL, receta)
  }
}
