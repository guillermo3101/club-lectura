import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserTypesModule } from './user-types/user-types.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'mysql',
      host:'localhost',
      username:'root',
      password:'1234',
      port:3306,
      database:'Clubmysql',
      entities:[__dirname + '/**/*.entity{.ts,.js}'],
      synchronize:false
    }),
    UsersModule,
    UserTypesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
