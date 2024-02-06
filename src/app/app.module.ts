import {Module} from "@nestjs/common";
import {AppController} from "./app.controller";
import {AppService} from "./app.service";
import {SequelizeModule} from "@nestjs/sequelize";
import * as process from "process";

const imports = []
if (process.env.DBOFF !== "TRUE") {
  imports.push(SequelizeModule.forRoot({
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'root',
    database: 'nice',
    models: [],
    autoLoadModels: true,
  }))
}

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports,
})
export class AppModule {}
