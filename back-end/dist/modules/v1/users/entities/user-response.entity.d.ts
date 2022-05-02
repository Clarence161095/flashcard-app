import { RolesEnum } from '@decorators/roles.decorator';
import { PaginationParamsInterface } from '@interfaces/pagination-params.interface';
export declare class UserResponseEntity {
    id: number;
    role: RolesEnum;
    verified: boolean;
    email: string;
    password: string;
}
export declare class AllUsersResponseEntity {
    data?: [];
    collectionName?: string;
    options?: {
        location: string;
        paginationParams: PaginationParamsInterface;
        totalCount: number;
    };
}
