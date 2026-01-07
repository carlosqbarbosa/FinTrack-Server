import {
  IsNumber,
  IsString,
  IsIn,
  IsOptional,
  IsDateString,
} from 'class-validator';

export class CreateTransactionDto {
  @IsNumber() amount: number;
  @IsString() @IsIn(['income', 'expense']) type: 'income' | 'expense';
  @IsString() category: string;
  @IsOptional() @IsDateString() date?: string; // ISO string
}
