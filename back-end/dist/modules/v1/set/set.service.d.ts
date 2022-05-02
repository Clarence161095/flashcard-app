import { CreateSetDto } from './dto/create-set.dto';
import { UpdateSetDto } from './dto/update-set.dto';
export declare class SetService {
    create(createSetDto: CreateSetDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateSetDto: UpdateSetDto): string;
    remove(id: number): string;
}
