import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { VirtualKeyboardComponent } from './virtual-keyboard/virtual-keyboard.component';

@NgModule({
  declarations: [AppComponent, VirtualKeyboardComponent],
  imports: [BrowserModule, AppRoutingModule, MatToolbarModule, FormsModule, MatFormFieldModule, MatInputModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
