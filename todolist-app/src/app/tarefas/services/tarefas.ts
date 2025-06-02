import { Injectable } from '@angular/core';
import { Tarefa } from '../model/tarefa';
import { HttpClient } from '@angular/common/http';
import { first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TarefaService {

  private readonly API = 'http://localhost:8080/tarefas';
  //private readonly API = '/src/assets/tarefas.json';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Tarefa[]>(this.API)
    .pipe(
      first(),
      tap(tarefas => console.log(tarefas))
    );
  }

  save(record: Tarefa){
    return this.httpClient.post<Tarefa>(this.API, record)
    .pipe(
      first()
    );
  }

}
