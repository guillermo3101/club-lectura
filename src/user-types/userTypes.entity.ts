import { Users } from 'src/users/user.entity';
import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    BaseEntity,
    ManyToOne,
    OneToMany
  } from 'typeorm';
  
  @Entity()
  export class UserTypes extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    name: string;

    
    @OneToMany(() => Users, (user) => user.userTypes)
    users: Users[]

  }