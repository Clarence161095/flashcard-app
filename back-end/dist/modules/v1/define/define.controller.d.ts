import { DefineService } from './define.service';
import { CreateDefineDto } from './dto/create-define.dto';
import { UpdateDefineDto } from './dto/update-define.dto';
export declare class DefineController {
    private readonly defineService;
    constructor(defineService: DefineService);
    create(createDefineDto: CreateDefineDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateDefineDto: UpdateDefineDto): string;
    remove(id: string): string;
}
