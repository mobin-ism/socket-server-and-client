import { Injectable } from '@nestjs/common';
import { ChatGateway } from 'src/chat.gateway'
@Injectable()
export class AppService {
   constructor(
        private readonly chatGateway: ChatGateway
    ) {}
  getHello(): string {
    console.log(this.chatGateway.server.emit('message'));
    this.chatGateway.server.emit('message', 'Fetching Services');
    return 'Hello World!';
  }
}
