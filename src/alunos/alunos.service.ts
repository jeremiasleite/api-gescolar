import { Injectable, Scope, Inject } from '@nestjs/common';
import { Aluno } from './alunos.entity';
import { Repository, Like } from 'typeorm';

@Injectable({ scope: Scope.REQUEST })
export class AlunosService {
    /*constructor(
        @InjectRepository(Aluno)
        private AlunosRepository: Repository<Aluno>,
    ) {}*/

    private readonly AlunosRepository: Repository<Aluno>;

    constructor(@Inject('CONNECTION') connection) {
        this.AlunosRepository = connection.getRepository(Aluno);
    }

    findAll(): Promise<Aluno[]> {
        return this.AlunosRepository.find()
    }

    create(aluno: Aluno): Promise<Aluno> {
        return this.AlunosRepository.save(aluno)
    }

    findOne(id: string): Promise<Aluno> {
        return this.AlunosRepository.findOne(id)
    }

    findName(nome: string): Promise<Aluno[]> {
        return this.AlunosRepository.find({ nomeCompleto: Like('%' + nome + '%') })
    }

}
