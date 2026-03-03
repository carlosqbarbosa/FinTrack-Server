import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'João Silva', description: 'Nome completo do usuário' })
  @IsString()
  name!: string;

  @ApiProperty({ example: 'joao@email.com', description: 'E-mail para login' })
  @IsEmail()
  email!: string;

  @ApiProperty({ example: 'senha123', description: 'Senha mínima de 6 caracteres', minLength: 6 })
  @IsString()
  @MinLength(6)
  password!: string;
}