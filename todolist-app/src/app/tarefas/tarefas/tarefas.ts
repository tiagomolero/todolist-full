import { Component } from '@angular/core';
import { Tarefa } from '../model/tarefa';
import { TarefaService } from '../services/tarefas';
import { catchError, config, Observable, of } from 'rxjs';
import { AppMaterialModule } from '../../shared/app-material/app-material-module';
import { MatDialog } from '@angular/material/dialog';
import { ErroDialogComponent } from '../../shared/components/erro-dialog/erro-dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.html',
  imports: [
    AppMaterialModule
  ],
  styleUrl: './tarefas.css'
})

export class Tarefas {

  tarefas: Observable<Tarefa[]> = of([]);
  displayedColumns  = ['titulo', 'descricao', 'status', 'acoes'];

  constructor(
    private tarefasService: TarefaService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
  ){
    this.refresh()
  }

  refresh(){
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

  onEdit(tarefa: Tarefa){
    this.router.navigate(['editar', tarefa.id], {relativeTo: this.route})
  }

  onDelete(tarefa: Tarefa) {
    this.tarefasService.remove(tarefa.id).subscribe({
      next:() => {
        this.refresh()
        this.snackBar.open("Tarefa excluída com sucesso", 'X',{
          duration: 5000,
          verticalPosition: 'top',
          horizontalPosition: 'center'
        });
      },
      error:() => this.onError("Erro ao tentar excluir a tarefa")
  });
  }

}
