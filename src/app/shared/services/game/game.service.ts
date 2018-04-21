import { Injectable } from '@angular/core';
import { SocketService } from '../socket/socket.service';
import { SecretHitlerService } from '../secret-hitler/secret-hitler.service';

@Injectable()
export class GameService {

  constructor(private socketService: SocketService, private SecretHitlerService: SecretHitlerService) { }

  createGame(roomName, userName) {
    this.socketService.joinRoom(roomName, userName);
  }

  joinGame(roomName, userName) {
    this.socketService.joinRoom(roomName, userName);
  }

  startGame(users) {
    users = this.SecretHitlerService.randomizeUsers(users);
    this.socketService.startGame(users);
  }

}
