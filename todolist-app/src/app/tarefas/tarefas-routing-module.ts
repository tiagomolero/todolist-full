import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tarefas } from './tarefas/tarefas';
import { TarefaForm } from './tarefa-form/tarefa-form';

const routes: Routes = [
  { path: '', component: Tarefas },
  { path: 'nova', component: TarefaForm },
  { path: 'editar/:id', component: TarefaForm }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TarefasRoutingModule { }
