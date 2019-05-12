import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { PathLocationStrategy, LocationStrategy } from '@angular/common';
import { TerminalModule } from './terminal/terminal.module';
import { SocketIoModule } from 'ngx-socket-io';
import { socketConfig } from './config/socket.config';
import { SocketService } from './service/socket.service';

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
    SocketIoModule.forRoot(socketConfig),
  ],
  providers: [
    SocketService,
    { provide: LocationStrategy, useClass: PathLocationStrategy, },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
