import { CreateSetDto } from './dto/create-set.dto';
import { UpdateSetDto } from './dto/update-set.dto';
import { SetService } from './set.service';
export declare class SetController {
    private readonly setService;
    constructor(setService: SetService);
    create(createSetDto: CreateSetDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateSetDto: UpdateSetDto): string;
    remove(id: string): string;
}
