import { Injectable } from '@angular/core';
import { Tarefa } from '../model/tarefa';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  constructor(private httpClient: HttpClient) { }

  list(): Tarefa[]{
    return [
      {_id: "1", titulo: "Título 1", descricao: "Descrição Tarefa 1", status: 1, data: "23/05/2025"},
      {_id: "2", titulo: "Título 2", descricao: "Descrição Tarefa 2", status: 1, data: "23/05/2025"}
    ];
  }

}
