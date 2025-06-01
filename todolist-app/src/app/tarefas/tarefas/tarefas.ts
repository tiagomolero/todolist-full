import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { Tarefa } from '../model/tarefa';
import { TarefaService } from '../services/tarefas';

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.html',
  imports: [MatTableModule],
  styleUrl: './tarefas.css'
})

export class Tarefas {

  tarefas: Tarefa[] = [];
  displayedColumns: string[] = ['titulo', 'descricao', 'status', 'data'];

  tarefasService: TarefaService

  constructor(){
    this.tarefasService = new TarefaService();
    this.tarefas = this.tarefasService.list();
  }

}
