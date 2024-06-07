import { Injectable } from '@nestjs/common';
import { FirebaseService } from '../firebase/firebase.service';
import { Notes } from './notes.model';

@Injectable()
export class NotesService {
  constructor(private readonly firebaseService: FirebaseService) {}

  async findByRoom(room: number, password: string) {
    const data = await this.firebaseService.readData(room, password);
    console.log(data);
    return data;
  }

  async create(data: Notes) {
    const roomNo = parseInt(data.roomNo, 10);
    console.log(data.content, data.roomNo, data.password);
    await this.firebaseService.writeData({
      content: data.content,
      roomNo: roomNo,
      password: data.password,
    });
  }
}
