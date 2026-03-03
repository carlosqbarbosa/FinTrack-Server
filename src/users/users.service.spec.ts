import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { PrismaService } from '../prisma/prisma.service';

describe('UsersService', () => {
  let service: UsersService;
  let prisma: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: PrismaService,
          useValue: {
            user: {
              create: jest
                .fn()
                .mockResolvedValue({ id: 1, email: 'test@test.com' }),
              findUnique: jest.fn(),
            },
          },
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  // NOVO TESTE DE QA:
  it('should create a user and return the data', async () => {
    const userData = {
      name: 'Test User',
      email: 'test@test.com',
      password: 'password123',
    };
    const result = await service.create(userData);

    expect(prisma.user.create).toHaveBeenCalledTimes(1);
    expect(result.email).toEqual(userData.email);
  });
});
