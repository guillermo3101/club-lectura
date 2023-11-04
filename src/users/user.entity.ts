import { UserTypes } from 'src/user-types/userTypes.entity';
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
  export class Users extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    userName: string;
  
    @Column('varchar', { unique: true, nullable: false })
    email: string;
  
    @Column('varchar')
    password: string;
  
    @CreateDateColumn({ type: 'datetime' })
    createdAt: Date;

    @ManyToOne(() => UserTypes, (userTypes) => userTypes.users)
    userTypes: UserTypes
  }