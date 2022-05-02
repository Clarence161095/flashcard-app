import { PaginationParamsInterface } from '@interfaces/pagination-params.interface';
import { SuccessResponseInterface } from '@interfaces/success-response.interface';
import UsersService from './users.service';
export default class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getById(id: string): Promise<SuccessResponseInterface>;
    getAllVerifiedUsers(query: any): Promise<{
        collectionName: string;
        data: any;
        options: {
            location: string;
            paginationParams: PaginationParamsInterface;
            totalCount: number;
        } | undefined;
    }>;
}
