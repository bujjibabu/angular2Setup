import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { CradsComponent } from './crads/crads.component';
import { CardService } from './services/card.service';

@NgModule({
  declarations: [
    AppComponent,
    CradsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MaterialModule.forRoot()
  ],
  providers: [CardService],
  bootstrap: [AppComponent]
})
export class AppModule { }