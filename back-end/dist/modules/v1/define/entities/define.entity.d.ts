import { BaseEntity } from 'typeorm';
export declare class Define extends BaseEntity {
    id: string;
    name: string;
    description: string;
    card_id: string;
    user_id: string;
    created_at: Date;
    updated_at: Date;
    deletedDate: Date;
}
