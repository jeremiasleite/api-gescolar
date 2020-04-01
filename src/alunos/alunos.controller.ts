import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { Aluno } from './alunos.entity';
import { AlunosService } from './alunos.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('alunos')
@Controller('alunos')
export class AlunosController {

    constructor(private readonly alunosService: AlunosService) { }

    @Get()
    findAll(): Promise<Aluno[]> {
        return this.alunosService.findAll()
    }
    @Post()
    create(@Body() aluno: Aluno): Promise<Aluno> {
        return this.alunosService.create(aluno)
    }
    @Get(':nome')
    findName(@Param('nome') nome: string): Promise<Aluno[]>{
        return this.alunosService.findName(nome)
    }
}
