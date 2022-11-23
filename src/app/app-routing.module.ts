import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateRecetaComponent } from './create-receta/create-receta.component';
import { PostresListComponent } from './postres-list/postres-list.component';
import { RecetasListComponent } from './recetas-list/recetas-list.component';

const routes: Routes = [
{ path: '',redirectTo: 'postres',pathMatch: 'full' },
{ path: 'postres', component: PostresListComponent },
{ path: 'recetas', component: RecetasListComponent },
{ path: 'recetas/new', component: CreateRecetaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

