import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { NotesModel } from './notes.model';
import { v4 as uuid } from 'uuid';

@Injectable()
export class NotesService {
  constructor(
    @InjectModel(NotesModel) private readonly notesModel: typeof NotesModel,
  ) {}

  async findById(accessKey: string) {
    return this.notesModel.findOne({
      where: {
        accessKey: accessKey,
      },
    });
  }

  async create(note: NotesModel) {
    return this.notesModel.create({
      content: note.content,
      accessKey: uuid(),
    });
  }

  async findOne(id: number) {
    return this.notesModel.findOne({ where: { id } });
  }
}
