import { Component } from '@angular/core';

@Component({
  selector: 'app-display-word',
  templateUrl: './display-word.component.html',
  styleUrls: ['./display-word.component.scss']
})
export class DisplayWordComponent {
  word_letters: string[] = ['H', 'E', 'L', 'L', 'O'];
}
