import { IsNumber, IsString, IsIn } from 'class-validator';

export class CreateTransactionDto {
  @IsNumber()
  amount!: number;

  @IsString()
  @IsIn(['income', 'expense'])
  type!: 'income' | 'expense';

  @IsString()
  category!: string;
}