import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AllDevelopersComponent } from './all-developers/all-developers.component';

@NgModule({
  declarations: [
    AppComponent,
    AllDevelopersComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
