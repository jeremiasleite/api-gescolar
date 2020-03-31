import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './usuarios.entity';

@Injectable()
export class UsuariosService {
    constructor(
        @InjectRepository(Usuario)
        private UsuariosRepository: Repository<Usuario>,
    ) { }

    save(usuario: Usuario): Promise<Usuario> {
        return this.UsuariosRepository.save(usuario)
    }

    findAll(): Promise<Usuario[]> {
        return this.UsuariosRepository.find();
    }

    findOne(id: string): Promise<Usuario> {
        return this.UsuariosRepository.findOne(id);
    }

    async remove(id: string): Promise<void> {
        await this.UsuariosRepository.delete(id);
    }

    async update(usuario: Usuario): Promise<Usuario> {
        const usuarioToUpdate = await this.UsuariosRepository.findOne(usuario.id);
        usuarioToUpdate.firstName = usuario.firstName
        usuarioToUpdate.lastName = usuario.lastName
        return this.UsuariosRepository.save(usuarioToUpdate)
    }
}
