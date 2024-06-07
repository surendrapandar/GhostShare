import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { NotesService } from './notes.service';
import { Notes } from './notes.model';

@Controller('/notes')
export class NotesController {
  constructor(private NotesService: NotesService) {}

  @Get('')
  findAll(
    @Query('roomNo') roomNo: string,
    @Query('password') password: string,
  ) {
    const roomNumber = parseInt(roomNo, 10);
    return this.NotesService.findByRoom(roomNumber, password);
  }

  @Post('/create')
  create(@Body() data: Notes) {
    console.log(data);
    return this.NotesService.create(data);
  }
}
