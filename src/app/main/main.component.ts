import { Component, OnInit } from '@angular/core';
import { SocketService } from './socket.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public user = 'jefferson';

  constructor(private socketService: SocketService) { }

  ngOnInit() { }

  public onTerminal(event: string): void {

  }
}
