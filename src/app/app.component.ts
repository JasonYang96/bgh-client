import { Component } from '@angular/core';

import { SocketService } from './shared/service/socket/socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private socketService: SocketService) {

    socketService.send('hello world');
  }
}
