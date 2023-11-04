import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm'
import { UserTypes } from './userTypes.entity';
import { UserTypesCreate, UserTypesUpdate } from './dto/userTypesCreate.dto';

@Injectable()
export class UserTypesService {
    constructor(@InjectRepository(UserTypes) private userTypesRepository: Repository<UserTypes>) { }

    createUserType(userTypes:UserTypesCreate) {
        const newUserType = this.userTypesRepository.create(userTypes)
        return this.userTypesRepository.save(newUserType)
    }
    getUserTypes() {
    return this.userTypesRepository.find()   
    }

    async getOneUserTypes(id:number){
        return await this.userTypesRepository.findOneBy({id: id})
    }

    async updateUserTypes(id:number, userTypesUpdate: UserTypesUpdate){
        const userTypeUpdate = await this.userTypesRepository.update({id: id},userTypesUpdate)
        return  this.getOneUserTypes(id)
    }

    async deleteUserTypes(id:number){
        return await this.userTypesRepository.delete({id: id})
    }
}
