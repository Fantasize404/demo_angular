import { Component } from '@angular/core';
import { PosComponent } from './pages/pos/pos';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PosComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
