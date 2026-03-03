import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth, ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { TransactionsService } from './transactions.service';
import { RequestWithUser } from '../common/types/request-with-user';

@ApiTags('Transactions') 
@ApiBearerAuth()        
@UseGuards(JwtAuthGuard)
@Controller('transactions')
export class TransactionsController {
  constructor(private readonly service: TransactionsService) {}

  @Post()
  @ApiOperation({ summary: 'Criar nova transação financeira' })
  @ApiCreatedResponse({ description: 'Transação criada com sucesso.' })
  create(@Req() req: any, @Body() dto: CreateTransactionDto) {
    const userId = req.user.userId;
    return this.service.create(userId, dto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar transações do usuário logado' })
  @ApiOkResponse({ description: 'Lista de transações recuperada com sucesso.' })
  findAll(@Req() req: RequestWithUser) {
    const userId = req.user.userId;
    return this.service.findAll(userId);
  }
}