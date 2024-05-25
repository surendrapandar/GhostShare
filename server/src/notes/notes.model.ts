import { DataTypes, Optional } from 'sequelize';

import {
  AutoIncrement,
  Column,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';

export interface Notes {
  id: number;
  content: string;
  accessKey: string;
}

export interface NotesCreationAttributes extends Optional<Notes, 'id'> {}

@Table
export class NotesModel extends Model<Notes, NotesCreationAttributes> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column
  accessKey: string;

  @Column(DataTypes.TEXT({ length: 'long' }))
  content: string;
}
