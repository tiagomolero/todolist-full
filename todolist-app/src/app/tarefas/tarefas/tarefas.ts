import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { Tarefa } from '../model/tarefa';
import { TarefaService } from '../services/tarefas';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.html',
  imports: [MatTableModule],
  styleUrl: './tarefas.css'
})

export class Tarefas {

  tarefas: Observable<Tarefa[]>;
  displayedColumns  = ['titulo', 'descricao', 'status', 'data'];


  constructor(private tarefasService: TarefaService){
    //this.tarefasService = new TarefaService();
    this.tarefas = this.tarefasService.list();
  }

}
