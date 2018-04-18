import { Injectable } from '@angular/core';
import { SocketService } from '../socket/socket.service';

@Injectable()
export class GameService {

  constructor(private socketService: SocketService) { }

  createGame(roomName, userName) {
    console.log('creating game');
    this.socketService.joinRoom(roomName, userName);
  }

  joinGame(roomName, userName) {
    this.socketService.joinRoom(roomName, userName);
  }

  startGame(users) {
    users[0].role = 'hitler';
    users[0].party = 'fascist';
    users[1].role = 'liberal';
    users[1].party = 'liberal';
    console.log(users);
    this.socketService.startGame(users);
  }

}
