import { BaseEntity } from 'typeorm';
export declare class Card extends BaseEntity {
    id: string;
    term: string;
    define: string;
    process: number;
    user_id: string;
    set_id: string;
    created_at: Date;
    updated_at: Date;
    deletedDate: Date;
}
