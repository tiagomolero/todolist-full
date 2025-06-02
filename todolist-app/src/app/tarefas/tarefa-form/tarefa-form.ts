import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AppMaterialModule } from '../../shared/app-material/app-material-module';
import { ActivatedRoute, Router } from '@angular/router';
import { TarefaService } from '../services/tarefas';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';

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
      titulo: [null],
      descricao: [null],
      status: [null]
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
