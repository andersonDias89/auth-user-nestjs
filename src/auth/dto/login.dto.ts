import { IsEmail, IsEmpty, IsNotEmpty, IsString } from 'class-validator';

export class LoginDto {
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
