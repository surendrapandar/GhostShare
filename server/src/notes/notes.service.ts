import { Injectable } from '@nestjs/common';
import { FirebaseService } from '../firebase/firebase.service';
import { Notes } from './notes.model';

@Injectable()
export class NotesService {
  constructor(private readonly firebaseService: FirebaseService) {}

  async findByRoom(room: number, password: string) {
    console.log(room, password);
    const data = await this.firebaseService.readData(room, password);
    console.log(data);
    return data;
  }

  async create(data: Notes) {
    await this.firebaseService.writeData({
      content: data.content,
      roomNo: data.room,
      password: data.password,
    });
  }
}
