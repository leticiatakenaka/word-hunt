import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-virtual-keyboard',
  templateUrl: './virtual-keyboard.component.html',
  styleUrls: ['./virtual-keyboard.component.scss']
})
export class VirtualKeyboardComponent {
  @Output() keyPress: EventEmitter<string> = new EventEmitter<string>();

  first_row_keys: string[] = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
  second_row_keys: string[] = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
  third_row_keys: string[] = ['Z', 'X', 'C', 'V', 'B', 'N', 'M'];

  onKeyPress(key: string): void {
    this.keyPress.emit(key);
  }
}
