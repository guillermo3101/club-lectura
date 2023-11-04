import { Injectable } from '@nestjs/common';
import { Users } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm'
import { UserCreate, UserUpdate } from './dto/userCreate.dto';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(Users) private userRepository: Repository<Users>) { }

    createUser(user:UserCreate) {
        const newUser = this.userRepository.create(user)
        return this.userRepository.save(newUser)
    }
    getUsers() {
    return this.userRepository.find()   
    }

    async getOneUser(id:number){
        return await this.userRepository.findOneBy({id: id})
    }

    async updateUser(id:number, userUpdate: UserUpdate){
        const usersUpdate = await this.userRepository.update({id: id},userUpdate)
        return  this.getOneUser(id)
    }

    async deleteUser(id:number){
        return await this.userRepository.delete({id: id})
    }
}

