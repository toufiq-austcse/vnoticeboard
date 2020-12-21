import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Institute from './institute.entity';
import { Repository } from 'typeorm';

import * as uniqueId from 'uniqid';
import { RegisterDto } from '../authentication/dto/register.dto';
@Injectable()
export class InstituteService {
  constructor(
    @InjectRepository(Institute)
    private instituteRepository: Repository<Institute>,
  ) {}

  async create(registerDto: RegisterDto) {
    const newInstitute = await this.instituteRepository.create({
      ...registerDto,
      unique_id: uniqueId(),
    });
    await this.instituteRepository.save(newInstitute);
    return newInstitute;
  }

  getById(id: any) {
    return this.instituteRepository.findOne(id);
  }

  async findByEmail(email: string) {
    let institute = await this.instituteRepository.findOne({ email });

    if (!institute) {
      throw new NotFoundException(email + ' Not Found');
    }
    return institute;
  }
}
