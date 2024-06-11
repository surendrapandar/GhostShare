import { Injectable } from '@nestjs/common';
import { FirebaseService } from '../firebase/firebase.service';
import { Notes } from './notes.model';

@Injectable()
export class NotesService {
  constructor(private readonly firebaseService: FirebaseService) {}

  async findByRoom(room: number, password: string) {
    const data = await this.firebaseService.readData(room, password);
    console.log(data);
    if (data.length === 0) {
      return {
        statusCode: 404,
        roomData: 'No data found',
      };
    } else {
      return {
        statusCode: 200,
        roomData: data[0],
      };
    }
  }

  async create(data: Notes) {
    const roomNo = parseInt(data.roomNo, 10);
    console.log(data.content, data.roomNo, data.password);

    if (await this.firebaseService.checkRoomExists(roomNo)) {
      return {
        statusCode: 400,
        content: 'Room already exists',
      };
    }

    const content = await this.firebaseService.writeData({
      content: data.content,
      roomNo: roomNo,
      password: data.password,
    });
    return {
      statusCode: 200,
      content: content,
    };
  }
}
