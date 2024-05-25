import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { NotesModel } from './notes.model';

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
      accessKey: note.accessKey,
    });
  }

  async findOne(id: number) {
    return this.notesModel.findOne({ where: { id } });
  }
}
