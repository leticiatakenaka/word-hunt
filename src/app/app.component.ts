import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'word-hunt';

  result: string = '';

  onKeyPress(key: string): void {
    this.result = key;
    console.log(this.result);
  }
}
