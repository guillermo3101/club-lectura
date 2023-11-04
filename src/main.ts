import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('API Para el Club de Lectura')
    .setDescription('API para el manejo de la informacion deL Club de Lectura')
    .addTag('user-types')
    .addTag('users')

    .build()

    const document = SwaggerModule.createDocument(app,config);
    SwaggerModule.setup('documentacion',app, document,{
      explorer:true,
      swaggerOptions:{
        filter:true,
        showRequestDuration:true
      }
    })
  await app.listen(3000);
}
bootstrap();
