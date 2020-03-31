import { Controller, Get, Body, Post, Param, Put } from '@nestjs/common';
import { ApiTags, ApiResponse, ApiCreatedResponse } from '@nestjs/swagger';
import { Usuario } from './usuarios.entity';
import { UsuariosService } from './usuarios.service';


@ApiTags('usuarios')
@Controller('usuarios')
export class UsuariosController {

    constructor( private readonly usuariosService: UsuariosService ){}

    @Get()
    @ApiCreatedResponse({
        description: 'Retorna todos os usuários.',
        type: [Usuario],
      })
    @ApiResponse({ status: 200, description: 'The record has been successfully created.'})
    findAll(): Promise<Usuario[]>{
        return this.usuariosService.findAll()
    }
    
    @Post()
    @ApiResponse({ status: 200, description: 'The record has been successfully created.'})
    createUsuario(@Body() usuario: Usuario ): Promise<Usuario> {        
        return this.usuariosService.save(usuario)
    }

    @Get(':id')
    @ApiCreatedResponse({
        description: 'Retorna um usuário de acordo com o id passado.',
        type: Usuario,
      })
    @ApiResponse({ status: 200, description: 'The record has been successfully created.'})
    findOne(@Param() params): Promise<Usuario>{        
        return this.usuariosService.findOne(params)
    }

    @Put()
    update(@Body() usuario: Usuario): Promise<Usuario>{
        return this.usuariosService.update(usuario)
    }
    

}
