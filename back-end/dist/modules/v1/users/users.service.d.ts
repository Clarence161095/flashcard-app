import { PaginatedUsersInterface } from '@interfaces/paginatedEntity.interface';
import { PaginationParamsInterface } from '@interfaces/pagination-params.interface';
import SignUpDto from '@v1/auth/dto/sign-up.dto';
import { UpdateResult } from 'typeorm/index';
import UpdateUserDto from './dto/update-user.dto';
import UserEntity from './schemas/user.entity';
import UsersRepository from './users.repository';
export default class UsersService {
    private readonly usersRepository;
    constructor(usersRepository: UsersRepository);
    create(user: SignUpDto): Promise<UserEntity>;
    getByEmail(email: string): Promise<UserEntity | undefined>;
    getVerifiedUserByEmail(email: string): Promise<UserEntity | undefined>;
    getUnverifiedUserByEmail(email: string): Promise<UserEntity | undefined>;
    getById(id: string): Promise<UserEntity | undefined>;
    getVerifiedUserById(id: string): Promise<UserEntity | undefined>;
    getUnverifiedUserById(id: string): Promise<UserEntity | undefined>;
    update(id: string, data: UpdateUserDto): Promise<UpdateResult>;
    getAllVerifiedWithPagination(options: PaginationParamsInterface): Promise<PaginatedUsersInterface>;
}
