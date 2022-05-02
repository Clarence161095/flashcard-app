import { BaseEntity } from 'typeorm';
export declare class Sample extends BaseEntity {
    id: string;
    content: string;
    description: string;
    card_id: string;
    user_id: string;
    created_at: Date;
    updated_at: Date;
    deletedDate: Date;
}
