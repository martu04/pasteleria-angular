import { Component, OnInit } from '@angular/core';
import { Receta } from '../receta';
import { RecetasDataService } from '../recetas-data.service';

@Component({
  selector: 'recetas-list',
  templateUrl: './recetas-list.component.html',
  styleUrls: ['./recetas-list.component.scss']
})
export class RecetasListComponent implements OnInit {
  recetas : Receta[]= [];

  constructor( private recetasDataService: RecetasDataService) { }

  ngOnInit(): void {
    this.recetasDataService.getAll().subscribe( recetas => this.recetas= recetas);
  }

}
