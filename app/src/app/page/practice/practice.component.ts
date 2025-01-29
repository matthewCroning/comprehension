import { Component } from '@angular/core';
import { TextContentComponent } from './text-content/text-content.component';

@Component({
  selector: 'app-practice',
  standalone: true,
  imports: [TextContentComponent],
  templateUrl: './practice.component.html',
  styleUrl: './practice.component.scss'
})
export class PracticeComponent {

}
