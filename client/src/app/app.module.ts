import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { PathLocationStrategy, LocationStrategy } from '@angular/common';
import { TerminalModule } from './terminal/terminal.module';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    TerminalModule,
  ],
  providers: [
    { provide: LocationStrategy, useClass: PathLocationStrategy, },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
