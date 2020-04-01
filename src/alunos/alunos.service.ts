import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Aluno } from './alunos.entity';
import { Repository, Like } from 'typeorm';

@Injectable()
export class AlunosService {
    constructor(
        @InjectRepository(Aluno)
        private AlunosRepository: Repository<Aluno>,
    ) {}

    findAll(): Promise<Aluno[]> {
        return this.AlunosRepository.find()
    }

    create(aluno:Aluno): Promise<Aluno>{
        return this.AlunosRepository.save(aluno)
    }

    findOne(id: string): Promise<Aluno>{
        return this.AlunosRepository.findOne(id)
    }

    findName(nome: string): Promise<Aluno[]>{
        return this.AlunosRepository.find({nomeCompleto: Like('%' + nome + '%')})
    }
    
}
