import { Injectable } from '@nestjs/common';

import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { AuthenticationService } from '../authentication.service';
import Institute from 'src/institute/institute.entity';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authenticationService: AuthenticationService) {
    super({
      usernameField: 'email',
    });
  }

  async validate(email:string,password:string):Promise<Institute>{
      return this.authenticationService.getAuthenticatedInstitute(email,password);

  }



}
