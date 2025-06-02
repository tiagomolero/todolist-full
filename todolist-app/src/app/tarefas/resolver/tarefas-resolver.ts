import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { TarefaService } from '../services/tarefas';
import { Tarefa } from '../model/tarefa';
import { of } from 'rxjs';

export const tarefasResolver: ResolveFn<Tarefa> = (route, state) => {

  const service = inject(TarefaService);

  if(route.params && route.params["id"]){
    return service.getById(route.params["id"]);
  }
  return of({id: '', titulo: '', descricao: '', status: '', dataCriacao: ''})
};
