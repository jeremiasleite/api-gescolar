import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Aluno } from './alunos.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AlunosService {
    constructor(
        @InjectRepository(Aluno)
        private AlunosRepository: Repository<Aluno>,
    ) {}

    findAll(): Promise<Aluno[]> {
        return this.AlunosRepository.find();
    }

    save(aluno:Aluno): Promise<Aluno>{
        return this.AlunosRepository.save(aluno)
    }
    
}
