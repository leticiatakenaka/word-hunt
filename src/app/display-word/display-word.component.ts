import { Component, OnInit } from '@angular/core';
import { RandomWordsService } from '../services/random-words.service';

@Component({
  selector: 'app-display-word',
  templateUrl: './display-word.component.html',
  styleUrls: ['./display-word.component.scss']
})
export class DisplayWordComponent implements OnInit {
  constructor(private randomWordsService: RandomWordsService) { }

  word!: String;
  word_letters!: string[];

  ngOnInit() {
    // this.randomWordsService.getWord().subscribe(data => {
    //   this.word = data[0].word
    //   this.word_letters = this.word.toUpperCase().split('');
    // })
    this.word = "teste"
    this.word_letters = this.word.toUpperCase().split('');
  }
}
