import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as socketIo from 'socket.io-client';

import { environment } from '../../../../environments/environment';

@Injectable()
export class SocketService {
  private socket;

  constructor() {
    this.socket = socketIo(environment.serverURL);
  }

  send(message: String) {
    this.socket.emit('message', message);
  }

  joinRoom(roomName: String, userName: String) {
    this.socket.emit('join room', {
      userName: userName,
      roomName: roomName
    });
  }

  startGame(users) {
    this.socket.emit('start game', users);
  }

  newUsers() {
    return new Observable<any>(observer => {
      this.socket.on('new users', users => {
        observer.next(users);
      });
    });
  }

}
