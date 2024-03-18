import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';



@Injectable()
export class UserService {

constructor (
  @InjectRepository(User)
  private readonly userRepository: Repository<User>,
){}

async findOneByEmail(email: string): Promise<User>{
  return this.userRepository.findOne({where: {userEmail : email}})}

async create (CreateUserDto: CreateUserDto){
  return this.userRepository.save(CreateUserDto)
}




}
