import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, IsIn, IsEmail, MinLength } from 'class-validator';

export class CreateTransactionDto {
  @ApiProperty({ example: 1500.75, description: 'Valor da transação' })
  @IsNumber()
  amount!: number;

  @ApiProperty({ example: 'income', enum: ['income', 'expense'] })
  @IsString()
  @IsIn(['income', 'expense'])
  type!: 'income' | 'expense';

  @ApiProperty({ example: 'Salário', description: 'Categoria do gasto/ganho' })
  @IsString()
  category!: string;
}