import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tarefas } from './tarefas/tarefas';

const routes: Routes = [
  {
    path: '',
    component: Tarefas
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TarefasRoutingModule { }
