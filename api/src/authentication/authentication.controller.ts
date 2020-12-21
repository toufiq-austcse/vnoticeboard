import {
  Controller,
  Post,
  Body,
  HttpCode,
  UseGuards,
  Req,
  Get,
} from '@nestjs/common';

import { AuthenticationService } from './authentication.service';
import { RegisterDto } from './dto/register.dto';
import { LocalAuthenticationGuard } from '../shared/guard/local-authentication.guard';
import { JwtAuthenticationGuard } from '../shared/guard/jwt-authentication.guard';

@Controller('authentication')
export class AuthenticationController {
  constructor(private authenticationService: AuthenticationService) {}

  @Post('register')
  register(@Body() registerDto: RegisterDto) {
    return this.authenticationService.register(registerDto);
  }

  @Post('login')
  @HttpCode(200)
  @UseGuards(LocalAuthenticationGuard)
  login(@Req() request: any) {
    return this.authenticationService.login(request.user);
  }

  @Get('me')
  @UseGuards(JwtAuthenticationGuard)
  getMe(@Req() request: any) {
    return request.user;
  }
}
