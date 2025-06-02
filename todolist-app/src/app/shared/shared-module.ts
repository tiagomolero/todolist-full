import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErroDialogComponent } from './components/erro-dialog/erro-dialog';
import { AppMaterialModule } from './app-material/app-material-module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ErroDialogComponent,
    AppMaterialModule
  ],
  exports:[ErroDialogComponent]
})
export class SharedModule { }
