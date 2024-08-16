import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'test', paranoid: false, underscored: true })
export class TestModel extends Model<TestModel> {
  @Column({ type: DataType.INTEGER, primaryKey: true })
  id: number;
}
