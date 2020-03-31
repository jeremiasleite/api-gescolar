import { Controller, Get, Post, Body } from '@nestjs/common';
import { Aluno } from './alunos.entity';
import { AlunosService } from './alunos.service';

@Controller('alunos')
export class AlunosController {

    constructor(private readonly alunosService: AlunosService) { }

    @Get()
    findAll(): Promise<Aluno[]> {
        return this.alunosService.findAll()
    }
    @Post()
    create(@Body() aluno: Aluno): Promise<Aluno> {
        return this.alunosService.save(aluno)
    }
}
