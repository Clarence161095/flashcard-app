import { Repository, UpdateResult } from 'typeorm/index';
import SignUpDto from '@v1/auth/dto/sign-up.dto';
import { PaginationParamsInterface } from '@interfaces/pagination-params.interface';
import { PaginatedUsersInterface } from '@interfaces/paginatedEntity.interface';
import UpdateUserDto from './dto/update-user.dto';
import UserEntity from './schemas/user.entity';
export default class UsersRepository {
    private readonly usersModel;
    constructor(usersModel: Repository<UserEntity>);
    create(user: SignUpDto): Promise<UserEntity>;
    getByEmail(email: string): Promise<UserEntity | undefined>;
    getVerifiedUserByEmail(email: string): Promise<UserEntity | undefined>;
    getUnverifiedUserByEmail(email: string): Promise<UserEntity | undefined>;
    getById(id: string): Promise<UserEntity | undefined>;
    getVerifiedUserById(id: string): Promise<UserEntity | undefined>;
    getUnverifiedUserById(id: string): Promise<UserEntity | undefined>;
    updateById(id: string, data: UpdateUserDto): Promise<UpdateResult>;
    getAllVerifiedWithPagination(options: PaginationParamsInterface): Promise<PaginatedUsersInterface>;
}
