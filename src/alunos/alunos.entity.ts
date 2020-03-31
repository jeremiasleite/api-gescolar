import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

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
    @Column({ default: true })
    isActive: boolean;
}