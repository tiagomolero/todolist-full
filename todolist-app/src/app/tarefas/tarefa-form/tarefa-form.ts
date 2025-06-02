import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AppMaterialModule } from '../../shared/app-material/app-material-module';

@Component({
  selector: 'app-tarefa-form',
  imports: [AppMaterialModule],
  templateUrl: './tarefa-form.html',
  styleUrl: './tarefa-form.css'
})
export class TarefaForm {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder){
    this.form = this.formBuilder.group({
      titulo: [null],
      descricao: [null],
      status: [null],
      dataCriacao: [null]
    })
  }

}
