export declare enum RolesEnum {
    admin = "admin",
    user = "user"
}
export declare const Roles: (...roles: RolesEnum[]) => import("@nestjs/common").CustomDecorator<string>;
