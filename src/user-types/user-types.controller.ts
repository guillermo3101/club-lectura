import { Body, Controller, Post, Get, Patch, Param, Delete } from '@nestjs/common';
import { UserTypesService } from './user-types.service';
import { UserTypesCreate, UserTypesUpdate } from './dto/userTypesCreate.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('user-types')
@Controller('user-types')
export class UserTypesController {
    constructor(private userTypesServices: UserTypesService) { }
    @Post()
    async createUserTypes(@Body() userTypes: UserTypesCreate) {
        return await this.userTypesServices.createUserType(userTypes)
    }

    @Get()
    async getUserTypes() {
        return await this.userTypesServices.getUserTypes()
    }

    @Get(':id')
    async getOne(@Param('id') id: number) {
        return await this.userTypesServices.getOneUserTypes(id)
    }

    @Patch(':id')
    async updateUserTypes(@Param('id') id: number, @Body() userTypesUpdate: UserTypesUpdate) {
        return await this.userTypesServices.updateUserTypes(id, userTypesUpdate)
    }
    @Delete(':id')
    async deleteUserTypes(@Param('id') id: number) {
        return await this.userTypesServices.deleteUserTypes(id)
    }
}
