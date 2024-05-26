import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { NotesService } from './notes.service';
import { NotesCreationAttributes } from './notes.model';

@Controller('/notes')
export class NotesController {
  constructor(private NotesService: NotesService) {}

  @Get(':accessKey')
  findByKey(@Param('accessKey') accessKey: string) {
    console.log(accessKey);
    return this.NotesService.findById(accessKey);
  }

  @Post()
  createNote(@Body() note: any) {
    console.log(note);
    return this.NotesService.create(note);
  }
}
