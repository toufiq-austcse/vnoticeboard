import { BadRequestException, Injectable } from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import { InstituteService } from 'src/institute/institute.service';
import * as bcrypt from 'bcrypt';
import Institute from 'src/institute/institute.entity';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthenticationService {
  constructor(
    private instituteService: InstituteService,
    private jwtService: JwtService,
  ) {}

  async register(registerDto: RegisterDto) {
    registerDto.password = bcrypt.hashSync(registerDto.password, 10);
    let newInstitute = await this.instituteService.create(registerDto);
    return {
      access_token: await this.getJwtToken(newInstitute),
      unique_id: newInstitute.unique_id,
    };
  }

  async login(institute: Institute) {
    return {
      access_token: await this.getJwtToken(institute),
      unique_id: institute.unique_id,
    };
  }

  async getJwtToken(institute: Institute) {
    return await this.jwtService.signAsync({
      id: institute.id,
    });
  }

  async getAuthenticatedInstitute(
    email: string,
    plainTextPassword: string,
  ): Promise<Institute> {
    let institute = await this.instituteService.findByEmail(email);
    await this.verifyPassword(plainTextPassword, institute.password);
    return institute;
  }

  private async verifyPassword(
    plainTextPassword: string,
    hashedPassword: string,
  ) {
    let isPasswordMatched = await bcrypt.compareSync(
      plainTextPassword,
      hashedPassword,
    );

    if (!isPasswordMatched) {
      throw new BadRequestException('wrong credentials provided');
    }
  }
}
