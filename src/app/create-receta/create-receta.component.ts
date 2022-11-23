import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Postre } from '../postre';
import { PostresDataService } from '../postres-data.service';
import { Receta } from '../receta';
import { RecetasDataService } from '../recetas-data.service';
import { RecetaDto } from './receta.dto';

@Component({
  selector: 'create-receta',
  templateUrl: './create-receta.component.html',
  styleUrls: ['./create-receta.component.scss']
})
export class CreateRecetaComponent implements OnInit {

  postres: Postre[] = [];

  recetaForm: RecetaDto = {
    id: 0,
    ingredientes: '',
    receta: '',
    tiempo: '',
    dificultad: '',
    postre: 0
  }

  constructor(private recetasDataService: RecetasDataService, private postresDataService: PostresDataService, private router: Router) { }
  valido() {
    if (this.recetaForm.ingredientes == "" || this.recetaForm.receta == "" || this.recetaForm.tiempo == "" || this.recetaForm.dificultad == "" || this.recetaForm.postre == 0)
      return false 
    else 
      return true
 }

  ngOnInit(): void {
    this.postresDataService.getAll().subscribe(data => { this.postres = data })
  }

  createReceta() {
    if (!this.valido()) return
    this.recetasDataService.create(this.recetaForm).subscribe(() => this.router.navigate(["/recetas"]))
  }
} 
