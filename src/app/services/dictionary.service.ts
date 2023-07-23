import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  private url = "https://api.dictionaryapi.dev/api/v2/entries/en/"

  constructor(private http: HttpClient) { }

  getWordDefinition(word: String): Observable<any> {
    return this.http.get(`${this.url}${word}`)
  }
}
