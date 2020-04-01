import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

//export type TipoSanguineoType = 'A+'|'A-'|'B+'|'B-'|'O+'|'O-'|'AB+'|'AB-'
//export type SexoType = 'M'| 'F'| 'Outro'
@Entity()
export class Aluno {
    
    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column({length: 30})
    nomeCompleto: string;

    @ApiProperty()
    @Column({length: 30})
    nomeMae: string;

    @ApiProperty()
    @Column({length: 30})
    nomePai: string;

    @ApiProperty()
    @Column({ type: 'datetime'})
    dataNascimento: string;

    @ApiProperty()
    @Column({length: 50})
    email: string;

    @ApiProperty()
    @Column({length: 11})
    cpf: string;

    @ApiProperty()
    @Column({length: 20})
    rg: string;
    
    @ApiProperty()
    @Column({length: 20})
    naturalidade: string;
    
    @ApiProperty()
    @Column({length: 20, default: 'brasil'})
    nacionalidade: string;

    @ApiProperty()
    @Column()
    tipoSanguineo: string;//enum: ['A+','A-','B+','B-','O+','O-','AB+','AB-']

    @ApiProperty()
    @Column()
    sexo: string;//enum: ['M', 'F', 'Outro']
    
    @ApiProperty()
    @Column({length: 20})
    celular: string;

    @ApiProperty()
    @Column({length: 20})
    foneFixo: string;

    @ApiProperty()
    @Column({length: 20})
    outroFone: string;

    @ApiProperty()
    @Column({length: 20})
    cep: string;

    @ApiProperty()
    @Column({length: 20})
    logradouro: string;

    @ApiProperty()
    @Column({length: 20})
    numero: string;

    @ApiProperty()
    @Column({length: 20})
    bairro: string;

    @ApiProperty()
    @Column({length: 20})
    cidade: string;

    @ApiProperty()
    @Column({length: 2})
    uf: string;

    @ApiProperty()
    @Column({length: 20})
    complemento: string;

    @ApiProperty()
    @Column({length: 20})
    observacao: string;

    @ApiProperty()
    @Column({length: 20})
    fotoPerfil: string;

    @ApiProperty()
    @Column({length: 30})
    religiao: string;
    
    @ApiProperty()
    @Column({length: 100})
    fazUsoRemedios: string;

    @ApiProperty()
    @Column({length: 100})
    alergias: string;

    @ApiProperty()
    @Column({length: 100})
    cuidadoAlergia: string;

    @ApiProperty()
    @Column({length: 100})
    tratarAlergia: string;
    
    @ApiProperty()
    @Column({length: 100})
    tomouVacinas: string;

    @ApiProperty()
    @Column({length: 100})
    remediosPermitidos: string;

    @ApiProperty()
    @Column({length: 100})
    restricaoAlimentar: string;

    @ApiProperty()
    @Column({length: 100})
    restricaoFisica: string;

    @ApiProperty()
    @Column({length: 100})
    deficiencia: string;

    @ApiProperty()
    @Column({length: 100})
    problemasSaude: string;

    @ApiProperty()
    @Column({ default: true })
    isActive: boolean;
}