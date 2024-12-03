import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftCComponent } from './Components/left-c/left-c.component';
import { RightCComponent } from './Components/right-c/right-c.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftCComponent,
    RightCComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
