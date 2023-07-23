import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RandomWordsService {
  private url = "https://random-words-api.vercel.app/word/"

  constructor(private http: HttpClient) { }

  getWord(): Observable<any> {
    return this.http.get(`${this.url}verb`)
  }
}
