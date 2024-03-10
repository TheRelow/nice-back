import {BelongsTo, Column, DataType, Default, ForeignKey, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {User} from "@/features/users/users.model";
import {Folder} from "@/features/folders/folders.model";

interface TaskCreationAttrs {
  title: string;
  content: string;
}

@Table({tableName: 'tasks'})
export class Task extends Model<Task, TaskCreationAttrs> {
  @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;

  @ApiProperty({example: 'Task title', description: 'Название задачи'})
  @Column({type: DataType.STRING, allowNull: false})
  title: string;

  @Default(false)
  @ApiProperty({example: false, description: 'Выполнена ли задача'})
  @Column({type: DataType.BOOLEAN, allowNull: false})
  isDone: boolean;

  @ApiProperty({example: 'Task content', description: 'Контент задачи'})
  @Column({type: DataType.STRING})
  content: string;

  @ForeignKey(() => User)
  @Column({type: DataType.INTEGER})
  userId: number;

  @ApiProperty({example: '1', description: 'id пользователя, создавшего задачу'})
  @BelongsTo(() => User)
  author: User

  @ForeignKey(() => Folder)
  @Column({type: DataType.INTEGER, allowNull: true})
  parentFolderId: number;

  @ApiProperty({example: '1', description: 'id родительской папки'})
  @BelongsTo(() => Folder, 'parentFolderId')
  parent: Folder;
}
