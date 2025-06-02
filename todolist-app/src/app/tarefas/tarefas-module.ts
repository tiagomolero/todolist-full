import { SharedModule } from './../shared/shared-module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarefasRoutingModule } from './tarefas-routing-module';
import { AppMaterialModule } from '../shared/app-material/app-material-module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TarefasRoutingModule,
    AppMaterialModule,
    SharedModule
  ]
})
export class TarefasModule { }
