import {Column, Model} from "sequelize-typescript";

export class UserModel extends Model {
  @Column
  firstName: string;

  @Column
  lastName: string;

  @Column({ defaultValue: true })
  isActive: boolean;
}
