import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class User {
  @IsString({})
  id: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
