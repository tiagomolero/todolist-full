import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarefasRoutingModule } from './tarefas-routing-module';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TarefasRoutingModule,
    MatTableModule
  ]
})
export class TarefasModule { }
