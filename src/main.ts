import * as process from "process";
import {NestFactory} from "@nestjs/core";
import {AppModule} from "./app";

async function bootstrap() {
  const PORT = +process.env.PORT | 1499
  const app = await NestFactory.create(AppModule)

  await app.listen(PORT, () => console.log(`server started on port ${PORT}`))
}

bootstrap()
