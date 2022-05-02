import { CreateDefineDto } from './dto/create-define.dto';
import { UpdateDefineDto } from './dto/update-define.dto';
export declare class DefineService {
    create(createDefineDto: CreateDefineDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateDefineDto: UpdateDefineDto): string;
    remove(id: number): string;
}
