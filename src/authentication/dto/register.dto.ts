import { isString } from "util";

import { IsEmail, IsString, IsNotEmpty, MinLength } from 'class-validator';

export class RegisterDto{
    @IsString()
    @IsNotEmpty()
    name:string;

    @IsEmail()
    @IsNotEmpty()
    email:string;

    @IsString()
    @IsNotEmpty()
    @MinLength(7)
    password:string;
}