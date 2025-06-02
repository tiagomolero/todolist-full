import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  exports: [
    MatToolbarModule,
    MatTableModule,
    MatDialogModule,
    MatButtonModule
  ],
})
export class AppMaterialModule { }
