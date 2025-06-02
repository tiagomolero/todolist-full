import { Component, inject } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';
import { AppMaterialModule } from '../../app-material/app-material-module';

@Component({
  selector: 'app-erro-dialog',
  imports: [AppMaterialModule],
  templateUrl: './erro-dialog.html',
  styleUrl: './erro-dialog.css'
})
export class ErroDialogComponent {
  data = inject(MAT_DIALOG_DATA);
}
