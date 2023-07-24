import { Component, Output, EventEmitter } from '@angular/core';
import { RandomWordsService } from '../services/random-words.service';

@Component({
  selector: 'app-virtual-keyboard',
  templateUrl: './virtual-keyboard.component.html',
  styleUrls: ['./virtual-keyboard.component.scss'],
})
export class VirtualKeyboardComponent {
  @Output() keyPress: EventEmitter<string> = new EventEmitter<string>();
  constructor(private randomWordsService: RandomWordsService) { }

  word: string = '';
  definition: string = '';
  word_letters: string[] = [''];
  discovery_letters: string[] = [''];

  first_row_keys: string[] = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
  second_row_keys: string[] = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
  third_row_keys: string[] = ['Z', 'X', 'C', 'V', 'B', 'N', 'M'];

  onKeyPress(key: string): void {
    this.keyPress.emit(key);

    for (let i = 0; i < this.word_letters.length; i++) {
      if (this.word_letters[i] === key) {
        console.log('Acertou!');

        this.discovery_letters[i] = key;
      }
    }
    console.log(this.discovery_letters);
  }

  ngOnInit() {
    this.randomWordsService.getWordObservable().subscribe((word) => {
      this.word = word;
      this.word_letters = this.word.toUpperCase().split('');
      for (let i = 1; i < this.word_letters.length; i++) {
        this.discovery_letters.push('_');
      }
    });

    this.randomWordsService
      .getDefinitionObservable()
      .subscribe((definition) => {
        this.definition = definition;
      });
  }
}
