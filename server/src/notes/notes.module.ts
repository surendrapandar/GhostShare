import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { NotesModel } from './notes.model';
import { NotesController } from './notes.controller';
import { NotesService } from './notes.service';

@Module({
  imports: [SequelizeModule.forFeature([NotesModel])],
  controllers: [NotesController],
  providers: [NotesService, NotesModel],
  exports: [],
})
export class NotesModule {}
