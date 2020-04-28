import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './usuarios.entity';
import { CreateUsuarioDto } from './dto/createUsuarioDto'
import { UpdateUsuarioDto } from './dto/updateUsuarioDto';
import { CostumeNotFoundException } from 'src/exceptions/notfound.exception';

@Injectable()
export class UsuariosService {
    constructor(
        @InjectRepository(Usuario)
        private UsuariosRepository: Repository<Usuario>,
    ) { }

    save(usuario: CreateUsuarioDto): Promise<Usuario> {
        return this.UsuariosRepository.save(usuario).then(e => new Usuario(e));              
    }

    findAll(): Promise<Usuario[]> {
        return this.UsuariosRepository.find();
    }

    async findOne(id: string): Promise<Usuario> {
        const usuario = this.UsuariosRepository.findOne(id).then(e => new Usuario(e));
        if( !(await usuario).id){
            throw new CostumeNotFoundException("Usuário não encontrado.")
        }        
        return usuario
    }

    async remove(id: string){        
        return await this.UsuariosRepository.delete(id);        
    }

    async update(usuario: UpdateUsuarioDto): Promise<Usuario> {
        const usuarioToUpdate = await this.UsuariosRepository.findOne(usuario.id).then(e => new Usuario(e));
        if( !(await usuarioToUpdate).id){
            throw new CostumeNotFoundException("Usuário não encontrado.")
        }  
        usuarioToUpdate.username = usuario.username
        usuarioToUpdate.email = usuario.email
        usuarioToUpdate.isActive = usuario.isActive
        return this.UsuariosRepository.save(usuarioToUpdate)
    }    
}
