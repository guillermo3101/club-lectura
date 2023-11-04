import { Body, Controller, Post, Get, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { ApiTags } from '@nestjs/swagger';
import { UserCreate, UserUpdate } from './dto/userCreate.dto';

@ApiTags('users')
@Controller('users')
export class UsersController {
    constructor(private userServices: UsersService) { }
    
    @Post()
    async createUser(@Body() users: UserCreate) {
        return await this.userServices.createUser(users)
    }

    @Get()
    async getUsers() {
        return await this.userServices.getUsers()
    }

    @Get(':id')
    async getOne(@Param('id') id: number) {
        return await this.userServices.getOneUser(id)
    }

    @Patch(':id')
    async updateUserTypes(@Param('id') id: number, @Body() userUpdate: UserUpdate) {
        return await this.userServices.updateUser(id, userUpdate)
    }
    @Delete(':id')
    async deleteUser(@Param('id') id: number) {
        return await this.userServices.deleteUser(id)
    }
}
