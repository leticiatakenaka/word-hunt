import { Component, DoCheck, OnInit } from '@angular/core';
import { RandomWordsService } from '../services/random-words.service';
import { DictionaryService } from '../services/dictionary.service';

@Component({
  selector: 'app-display-word',
  templateUrl: './display-word.component.html',
  styleUrls: ['./display-word.component.scss'],
})
export class DisplayWordComponent implements OnInit, DoCheck {
  constructor(
    private randomWordsService: RandomWordsService,
    private dictionaryService: DictionaryService
  ) { }

  word: string = 'convince';
  definition: string = 'To make someone believe, or feel sure about something, especially by using logic, argument or evidence';
  word_letters: string[] = this.word.toUpperCase().split('');


  ngOnInit() {
    this.randomWordsService.getWord().subscribe((data) => {
      this.dictionaryService
        .getWordDefinition(data[0].word)
        .subscribe((data) => {
          for (let i = 0; i < data[0].meanings.length; i++) {
            if (data[0].meanings[i].partOfSpeech === 'verb') {
              this.word = data[0].word;
              this.definition = data[0].meanings[i].definitions[0].definition;
              this.word_letters = this.word.toUpperCase().split('');

              this.randomWordsService.setWordAndDefinition(this.word, this.definition);
              break;
            }
          }
        });
    });

  }

  ngDoCheck() {
    this.randomWordsService
      .getDiscoveryLetters()
      .subscribe((discovery) => {
        this.word_letters = discovery;
      });
  }
}
