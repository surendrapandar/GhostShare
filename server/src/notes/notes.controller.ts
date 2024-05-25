import { Body, Controller, Get, Post } from '@nestjs/common';
import { NotesService } from './notes.service';
import { NotesCreationAttributes } from './notes.model';

@Controller('/notes')
export class NotesController {
  constructor(private NotesService: NotesService) {}

  @Get()
  findByKey(@Body() note: NotesCreationAttributes) {
    return this.NotesService.findById(note.accessKey);
  }

  @Post()
  createNote(@Body() note: any) {
    return this.NotesService.create(note.notes);
  }
}
