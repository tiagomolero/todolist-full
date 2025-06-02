import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppMaterialModule } from './shared/app-material/app-material-module';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    AppMaterialModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'todolist-app';
}
