import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';

@Entity()
export class Usuario {

    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number;


    @ApiProperty()
    @Column()
    email: string;

    @Exclude()
    @ApiProperty()
    @Column()
    password: string;

    @ApiProperty()
    @Column()
    username: string;

    @ApiProperty()
    @Column({ default: true })
    isActive: boolean;

    constructor(partial: Partial<Usuario>) {
        Object.assign(this, partial);
    }
}