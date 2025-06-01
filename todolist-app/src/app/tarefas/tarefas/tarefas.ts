import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';

export interface PeriodicElement {
  titulo: string;
  descricao: string;
  status: number;
  data: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {titulo: 'Tarefa 1', descricao: 'Descricao da Tarefa 1', status: 1, data: '23-05-2025'},
  {titulo: 'Tarefa 2', descricao: 'Descricao da Tarefa 2', status: 2, data: '23-05-2025'},
  {titulo: 'Tarefa 3', descricao: 'Descricao da Tarefa 3', status: 1, data: '23-05-2025'},
  {titulo: 'Tarefa 4', descricao: 'Descricao da Tarefa 4', status: 3, data: '23-05-2025'},
  {titulo: 'Tarefa 5', descricao: 'Descricao da Tarefa 5', status: 1, data: '23-05-2025'},
  {titulo: 'Tarefa 6', descricao: 'Descricao da Tarefa 6', status: 3, data: '23-05-2025'},
  {titulo: 'Tarefa 7', descricao: 'Descricao da Tarefa 7', status: 2, data: '23-05-2025'},
];

@Component({
  selector: 'app-tarefas',
  imports: [MatTableModule],
  templateUrl: './tarefas.html',
  styleUrl: './tarefas.css'
})
export class Tarefas {
  displayedColumns: string[] = ['titulo', 'descricao', 'status', 'data'];
  dataSource = ELEMENT_DATA;
}
