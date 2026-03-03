import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TransactionsService {
  constructor(private prisma: PrismaService) {}

  create(
    userId: number,
    data: { amount: number; type: string; category: string; date?: string },
  ) {
    return this.prisma.transaction.create({
      data: {
        ...data,
        date: data.date ? new Date(data.date) : undefined,
        userId,
      },
    });
  }

  list(userId: number) {
    return this.prisma.transaction.findMany({
      where: { userId },
      orderBy: { date: 'desc' },
    });
  }

  async findAll(userId: number) {
    return this.prisma.transaction.findMany({
      where: { userId },
    });
  }
}
