import {NestFactory} from "@nestjs/core";
import {AppModule} from "@/app";
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";
import {ValidationPipe} from "./pipes/validation.pipe";

async function bootstrap() {
    const PORT = process.env.PORT || 5000;
    const app = await NestFactory.create(AppModule)

    const config = new DocumentBuilder()
        .setTitle('Старт бэкенда на nest')
        .setDescription('Документация rest api')
        .setVersion('1.0.0')
        .build()
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('/api', app, document)

    app.useGlobalPipes(new ValidationPipe())

    await app.listen(PORT, () => console.log(`server started on port ${PORT}`))
}

bootstrap()
