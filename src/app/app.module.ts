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
import { HttpClientModule } from '@angular/common/http'; // Importe o HttpClientModule

@NgModule({
  declarations: [AppComponent, VirtualKeyboardComponent, DisplayWordComponent],
  imports: [HttpClientModule, BrowserModule, AppRoutingModule, MatToolbarModule, FormsModule, MatFormFieldModule, MatInputModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
