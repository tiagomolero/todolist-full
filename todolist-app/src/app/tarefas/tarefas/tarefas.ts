import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { Tarefa } from '../model/tarefa';

@Component({
  selector: 'app-tarefas',
  imports: [MatTableModule],
  templateUrl: './tarefas.html',
  styleUrl: './tarefas.css'
})




export class Tarefas {

  tarefas: Tarefa[] = [
    {_id: "1", titulo: 'Tarefa 1', descricao: 'Descricao da Tarefa 1', status: 1, data: '23-05-2025'},
    {_id: "2", titulo: 'Tarefa 2', descricao: 'Descricao da Tarefa 2', status: 2, data: '23-05-2025'},
    {_id: "3", titulo: 'Tarefa 3', descricao: 'Descricao da Tarefa 3', status: 1, data: '23-05-2025'}
  ];

  displayedColumns: string[] = ['titulo', 'descricao', 'status', 'data'];
  dataSource = this.tarefas;
}
