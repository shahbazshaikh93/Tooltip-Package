import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TextboxComponent } from './textbox/textbox.component';
import { TooltipComponent } from './tooltip/tooltip.component';


@NgModule({
  declarations: [
    AppComponent,
    TextboxComponent,
    TooltipComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
