import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
// import { NotesModel } from 'src/notes/notes.model';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5000,
      username: 'postgres',
      password: 'postgres',
      database: 'postgres',
      models: [],
      autoLoadModels: true,
      sync: {
        alter: true,
      },
    }),
  ],
})
export class DatabaseModule {}
