import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestModel } from './test.model';
import { moduleConfig } from './sequelize.config';

@Module({
  imports: [
    SequelizeModule.forRoot(moduleConfig),
    SequelizeModule.forFeature([TestModel]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
