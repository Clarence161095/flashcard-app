import { BaseEntity } from 'typeorm';
export default class Set extends BaseEntity {
    id: string;
    name: string;
    description: string;
    user_id: string;
    created_at: Date;
    updated_at: Date;
    deletedDate: Date;
}
