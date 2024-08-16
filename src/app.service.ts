import { InjectModel } from '@nestjs/sequelize';
import { Injectable } from '@nestjs/common';
import { TestModel } from './test.model';

@Injectable()
export class AppService {
  constructor(
    @InjectModel(TestModel)
    private readonly testModel: typeof TestModel,
  ) {}

  async getTestTable() {
    const result = await this.testModel.findAll();
    return result;
  }

  getHello(): string {
    return 'Hello World!';
  }
}
