import * as bcrypt from 'bcrypt';
jest.mock('bcrypt');
import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

describe('AuthService', () => {
  let service: AuthService;
  let usersService: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        {
          provide: UsersService,
          useValue: {
            findByEmail: jest.fn().mockResolvedValue({
              id: 1,
              email: 'test@test.com',
              password: 'hashed_password',
            }),
          },
        },
        {
          provide: JwtService,
          useValue: {
            signAsync: jest.fn().mockResolvedValue('fake_token_jwt'),
          },
        },
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
    usersService = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return an access token when credentials are valid', async () => {
    (bcrypt.compare as jest.Mock).mockResolvedValue(true);

    const result = await service.login('test@test.com', 'password123');
    expect(result).toHaveProperty('access_token');
    expect(result.access_token).toBe('fake_token_jwt');
  });
});
