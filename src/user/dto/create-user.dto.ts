import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsEmail(
    {},
    {
      message: 'Email invalido',
    },
  )
  email: string;

  @IsString()
  @IsNotEmpty({ message: 'Senha é Obrigatória para logar' })
  password: string;
}
