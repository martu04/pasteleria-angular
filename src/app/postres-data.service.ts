import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Postre } from './postre';
import { environment } from 'src/environments/environment';

const URL = environment.apiUrl + "/postres"
@Injectable({
  providedIn: 'root'
})
export class PostresDataService {

  constructor(private http: HttpClient) { }

getAll=(): Observable<Postre[]> => {
  return this.http.get<Postre[]>(URL);
}

}
