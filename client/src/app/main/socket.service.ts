import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SocketService {

  socket: any;

  constructor() {
    this.socket = io(environment.apiUrl, {
      path: '/socket',
    });
  }

  public send(message: string): any {
    this.socket.emit(message);
  }
}
