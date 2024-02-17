import {BelongsTo, Column, DataType, Default, ForeignKey, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {User} from "@/features/users/users.model";

@Table({tableName: 'cards'})
export class Card extends Model<Card> {
  @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;

  @ApiProperty({example: 'Card title', description: 'Название карточки'})
  @Column({type: DataType.STRING, allowNull: false})
  title: string;

  @Default(true)
  @ApiProperty({example: false, description: 'Пора ли повторять карточку'})
  @Column({type: DataType.BOOLEAN, allowNull: false})
  isTimeToStudy: boolean;

  @ApiProperty({example: 'Front side of task', description: 'Передняя сторона карточки'})
  @Column({type: DataType.STRING})
  front: string;

  @ApiProperty({example: 'Back side of task', description: 'Задняя сторона карточки'})
  @Column({type: DataType.STRING})
  back: string;

  @ForeignKey(() => User)
  @Column({type: DataType.INTEGER})
  userId: number;

  @ApiProperty({example: '1', description: 'id пользователя, создавшего карточку'})
  @BelongsTo(() => User)
  author: User
}
