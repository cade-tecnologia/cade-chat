import { Component, OnInit } from '@angular/core';
import { SocketService } from '../service/socket.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public user = '';

  constructor(
    private socketService: SocketService,
  ) { }

  ngOnInit() {
    this.socketService.getMessage();
    this.socketService.getUser();
  }

  public onTerminal(event: string): void {
    if (event.includes('user.name')) {
      console.log(event.slice(10));
    }
  }
}
