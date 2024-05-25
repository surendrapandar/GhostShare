import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './db/db.module';
import { NotesModule } from './notes/notes.module';

@Module({
  imports: [DatabaseModule, NotesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
