import { Component } from '@angular/core';
import { Tarefa } from '../model/tarefa';
import { TarefaService } from '../services/tarefas';
import { catchError, Observable, of } from 'rxjs';
import { AppMaterialModule } from '../../shared/app-material/app-material-module';
import { MatDialog } from '@angular/material/dialog';
import { ErroDialogComponent } from '../../shared/components/erro-dialog/erro-dialog';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.html',
  imports: [
    AppMaterialModule
  ],
  styleUrl: './tarefas.css'
})

export class Tarefas {

  tarefas: Observable<Tarefa[]>;
  displayedColumns  = ['titulo', 'descricao', 'status', 'acoes'];


  constructor(
    private tarefasService: TarefaService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
  ){
    //this.tarefasService = new TarefaService();
    this.tarefas = this.tarefasService.list()
    .pipe(
      catchError(error => {
        this.onError('Erro ao carregar as tarefas')
        return of([])
      })
    );
  }

  onError(errorMsg: string) {
    this.dialog.open(ErroDialogComponent, {
      data: errorMsg
    });
  }

  onAdd(){
    this.router.navigate(['nova'], {relativeTo: this.route})
  }

}
