import {
  Controller,
  Post,
  Body,
  HttpCode,
  UseGuards,
  Req,
  Get,
} from '@nestjs/common';
import { JwtAuthenticationGuard } from 'src/shared/guard/jwt-authentication.guard';
import { LocalAuthenticationGuard } from 'src/shared/guard/local-authentication.guard';
import { AuthenticationService } from './authentication.service';
import { RegisterDto } from './dto/register.dto';

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
