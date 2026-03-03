import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, MinLength } from 'class-validator';

export class LoginDto {
  @ApiProperty({ example: 'joao@email.com', description: 'E-mail cadastrado' })
  @IsEmail()
  email!: string;

  @ApiProperty({ example: 'senha123', description: 'Senha de acesso' })
  @IsString()
  @MinLength(6)
  password!: string;
}