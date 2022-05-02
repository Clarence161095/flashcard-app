import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import UsersService from '@v1/users/users.service';
import { DecodedUser } from './interfaces/decoded-user.interface';
import JwtTokensDto from './dto/jwt-tokens.dto';
import { ValidateUserOutput } from './interfaces/validate-user-output.interface';
import { LoginPayload } from './interfaces/login-payload.interface';
import AuthRepository from './auth.repository';
export default class AuthService {
    private readonly usersService;
    private readonly jwtService;
    private readonly authRepository;
    private readonly configService;
    constructor(usersService: UsersService, jwtService: JwtService, authRepository: AuthRepository, configService: ConfigService);
    validateUser(email: string, password: string): Promise<null | ValidateUserOutput>;
    login(data: LoginPayload): Promise<JwtTokensDto>;
    getRefreshTokenByEmail(email: string): Promise<string | null>;
    deleteTokenByEmail(email: string): Promise<number>;
    deleteAllTokens(): Promise<string>;
    verifyToken(token: string, secret: string): Promise<DecodedUser | null>;
}
