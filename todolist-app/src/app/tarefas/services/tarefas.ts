import { Injectable } from '@angular/core';
import { Tarefa } from '../model/tarefa';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class TarefaService {

  private readonly API = 'http://localhost:8080/tarefas';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Tarefa[]>(this.API);
  }

}
