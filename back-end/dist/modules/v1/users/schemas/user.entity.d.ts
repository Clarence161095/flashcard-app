import { RolesEnum } from '@decorators/roles.decorator';
export default class UserEntity {
    readonly id: string;
    readonly password: string;
    readonly email: string;
    readonly verified: boolean;
    readonly role: RolesEnum;
}
