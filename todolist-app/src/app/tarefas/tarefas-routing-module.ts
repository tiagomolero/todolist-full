import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tarefas } from './tarefas/tarefas';
import { TarefaForm } from './tarefa-form/tarefa-form';
import { tarefasResolver } from './resolver/tarefas-resolver';

const routes: Routes = [
  { path: '', component: Tarefas },
  { path: 'nova', component: TarefaForm,resolve: {tarefa: tarefasResolver} },
  { path: 'editar/:id', component: TarefaForm, resolve: {tarefa: tarefasResolver}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TarefasRoutingModule { }
