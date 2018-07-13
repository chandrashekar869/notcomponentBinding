import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { NavListComponent } from './nav-list/nav-list.component';
import { MainDisplayComponent } from './main-display/main-display.component';

@NgModule({
  declarations: [
    AppComponent,
    NavListComponent,
    MainDisplayComponent
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
