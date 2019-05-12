import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable()
export class SocketService {
  constructor(
    private socket: Socket
  ) {}

  public getMessage(): void {
    this.socket.on('sendMessage', (socket: Socket) => {
      console.log('SOCKET', socket);
    });
  }
}
