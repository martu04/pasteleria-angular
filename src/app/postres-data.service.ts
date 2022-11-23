import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Postre } from './postre';

const URL = "http://localhost:3000/postres"
@Injectable({
  providedIn: 'root'
})
export class PostresDataService {

  constructor(private http: HttpClient) { }

getAll=(): Observable<Postre[]> => {
  return this.http.get<Postre[]>(URL);
}

}
