import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PracticeComponent } from './page/practice/practice.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PracticeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'app';
}
