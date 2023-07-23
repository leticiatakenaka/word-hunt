import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { VirtualKeyboardComponent } from './virtual-keyboard/virtual-keyboard.component';
import { DisplayWordComponent } from './display-word/display-word.component';

@NgModule({
  declarations: [AppComponent, VirtualKeyboardComponent, DisplayWordComponent],
  imports: [BrowserModule, AppRoutingModule, MatToolbarModule, FormsModule, MatFormFieldModule, MatInputModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
