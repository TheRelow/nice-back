import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {User} from "@/features/users/users.model";

interface FolderCreationAttrs {
  email: string;
  password: string;
}

@Table({tableName: 'folders'})
export class Folder extends Model<Folder, FolderCreationAttrs> {
  @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;

  @ApiProperty({example: 'Folder title', description: 'Название папки'})
  @Column({type: DataType.STRING, allowNull: false})
  title: string;

  @ApiProperty({example: 'Folder content', description: 'Контент папки'})
  @Column({type: DataType.STRING, allowNull: false})
  content: string;

  @ForeignKey(() => User)
  @Column({type: DataType.INTEGER})
  userId: number;

  @ApiProperty({example: '1', description: 'id пользователя, создавшего папку'})
  @BelongsTo(() => User)
  author: User
}
