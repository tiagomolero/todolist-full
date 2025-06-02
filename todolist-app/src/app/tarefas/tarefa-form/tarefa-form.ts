import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AppMaterialModule } from '../../shared/app-material/app-material-module';
import { ActivatedRoute, Router } from '@angular/router';
import { TarefaService } from '../services/tarefas';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';
import { Tarefa } from '../model/tarefa';
import { merge } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-tarefa-form',
  imports: [AppMaterialModule],
  templateUrl: './tarefa-form.html',
  styleUrl: './tarefa-form.css'
})
export class TarefaForm {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private service: TarefaService,
    private snackBar: MatSnackBar,
    private location: Location
  ){
    this.form = this.formBuilder.group({
      id: [null],
      titulo: [null, [Validators.required, Validators.maxLength(100)]],
      descricao: [null, [Validators.required, Validators.maxLength(200)]],
      status: [null],
      dataCriacao: [null]
    });

    const tarefa: Tarefa = this.route.snapshot.data['tarefa']
    this.form.setValue({
      id: tarefa.id,
      titulo: tarefa.titulo,
      descricao: tarefa.descricao,
      status: tarefa.status,
      dataCriacao: tarefa.dataCriacao
    })
  }

  onSubmit(){
    this.service.save(this.form.value)
    .subscribe(result => this.onSucess(), error =>  this.onError());
  }

  onCancel(){
    this.router.navigate([''], {relativeTo: this.route})
  }

  private onSucess(){
    this.snackBar.open("Tarefa cadastrada com sucesso", '', {duration: 5000});
    this.location.back();
  }

  private onError(){
    this.snackBar.open("Erro ao criar a tarefa", '', {duration: 5000});
  }

}
