import { Module } from '@nestjs/common';
import { UserTypesController } from './user-types.controller';
import { UserTypesService } from './user-types.service';
import { TypeOrmModule } from '@nestjs/typeorm'; 
import { UserTypes } from './userTypes.entity';
@Module({
  imports:[TypeOrmModule.forFeature([UserTypes])],
  controllers: [UserTypesController],
  providers: [UserTypesService]
})
export class UserTypesModule {}
