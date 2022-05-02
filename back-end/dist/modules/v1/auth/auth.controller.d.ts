import { JwtService } from '@nestjs/jwt';
import { Request as ExpressRequest } from 'express';
import { ConfigService } from '@nestjs/config';
import UsersService from '@v1/users/users.service';
import { SuccessResponseInterface } from '@interfaces/success-response.interface';
import AuthService from './auth.service';
import RefreshTokenDto from './dto/refresh-token.dto';
import SignUpDto from './dto/sign-up.dto';
import VerifyUserDto from './dto/verify-user.dto';
export default class AuthController {
    private readonly authService;
    private readonly jwtService;
    private readonly usersService;
    private readonly configService;
    constructor(authService: AuthService, jwtService: JwtService, usersService: UsersService, configService: ConfigService);
    signIn(req: ExpressRequest): Promise<SuccessResponseInterface | never>;
    signUp(user: SignUpDto): Promise<SuccessResponseInterface | never>;
    refreshToken(refreshTokenDto: RefreshTokenDto): Promise<SuccessResponseInterface | never>;
    verifyUser(verifyUserDto: VerifyUserDto): Promise<SuccessResponseInterface | never>;
    logout(token: string): Promise<{} | never>;
    logoutAll(): Promise<{}>;
    getUserByAccessToken(token: string): Promise<SuccessResponseInterface | never>;
}
