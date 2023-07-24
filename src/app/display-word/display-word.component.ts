import { Component, OnInit } from '@angular/core';
import { RandomWordsService } from '../services/random-words.service';
import { DictionaryService } from '../services/dictionary.service';

@Component({
  selector: 'app-display-word',
  templateUrl: './display-word.component.html',
  styleUrls: ['./display-word.component.scss'],
})
export class DisplayWordComponent implements OnInit {
  constructor(
    private randomWordsService: RandomWordsService,
    private dictionaryService: DictionaryService
  ) { }

  word: string = 'convince';
  definition: string = 'To make someone believe, or feel sure about something, especially by using logic, argument or evidence';
  word_letters: string[] = this.word.toUpperCase().split('');

  ngOnInit() {
    // this.randomWordsService.getWord().subscribe((data) => {
    //   this.dictionaryService
    //     .getWordDefinition(data[0].word)
    //     .subscribe((data) => {
    //       for (let i = 0; i < data[0].meanings.length; i++) {
    //         if (data[0].meanings[i].partOfSpeech === 'verb') {
    //           const word = data[0].word;
    //           const definition = data[0].meanings[i].definitions[0].definition;
    //           this.word = word;
    //           this.randomWordsService.setWordAndDefinition(word, definition);
    //           this.word_letters = this.word.toUpperCase().split('');
    //           break;
    //         }
    //       }
    //     });
    // });
  }
}
