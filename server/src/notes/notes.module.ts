import { Module } from '@nestjs/common';
import { NotesController } from './notes.controller';
import { NotesService } from './notes.service';
import { FirebaseService } from '../firebase/firebase.service';

@Module({
  imports: [],
  controllers: [NotesController],
  providers: [NotesService, FirebaseService],
  exports: [],
})
export class NotesModule {}
