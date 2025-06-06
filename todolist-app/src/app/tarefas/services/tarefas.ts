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
    console.log(record)
    if(record.id){
       console.log('update')
      return this.update(record);
    }
    console.log('create')
    return this.create(record)
  }

   private create(record: Tarefa){
    return this.httpClient.post<Tarefa>(this.API, record)
    .pipe(first());
  }

  private update(record: Tarefa){
    return this.httpClient.put<Tarefa>(this.API, record)
    .pipe(first());
  }

  getById(id: string) {
    return this.httpClient.get<Tarefa>(`${this.API}/${id}`)
      .pipe(first()
      );
  }

  remove(id: string) {
    return this.httpClient.delete(`${this.API}/${id}`)
      .pipe(first()
      );
  }

}
