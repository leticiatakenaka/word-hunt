import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RandomWordsService {
  private url = "https://random-words-api.vercel.app/word/";
  private wordSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  private definitionSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor(private http: HttpClient) { }

  getWord(): Observable<any> {
    return this.http.get(`${this.url}verb`);
  }

  setWordAndDefinition(word: string, definition: string): void {
    this.wordSubject.next(word);
    this.definitionSubject.next(definition);
  }

  setDiscoveryLetters(letters: string[]) {

  }

  getWordObservable(): Observable<string> {
    return this.wordSubject.asObservable();
  }

  getDefinitionObservable(): Observable<string> {
    return this.definitionSubject.asObservable();
  }
}
