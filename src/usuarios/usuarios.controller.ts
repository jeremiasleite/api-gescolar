import { Controller, Get, Body, Post, Param, Put, UseInterceptors, UploadedFiles, ClassSerializerInterceptor, Delete, HttpStatus } from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express'
import { ApiTags, ApiResponse, ApiCreatedResponse } from '@nestjs/swagger';
import { Usuario } from './usuarios.entity';
import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto } from './dto/createUsuarioDto';
import { UpdateUsuarioDto } from './dto/updateUsuarioDto';

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
    @UseInterceptors(ClassSerializerInterceptor)
    findAll(): Promise<Usuario[]>{
        return this.usuariosService.findAll()
    }
    
    @Post()
    @ApiResponse({ status: 201, description: 'The record has been successfully created.'})
    @UseInterceptors(ClassSerializerInterceptor)
    create(@Body() usuario: CreateUsuarioDto): Promise<Usuario> {        
        return this.usuariosService.save(usuario)
    }

    @Get(':id')    
    @ApiCreatedResponse({description: 'Retorna um usuário de acordo com o id passado.', type: Usuario})
    @ApiResponse({ status: 200, description: 'The record has been successfully created.'})
    @UseInterceptors(ClassSerializerInterceptor)    
    async findOne(@Param() params){
        return this.usuariosService.findOne(params) 
    }

    @Put()
    @UseInterceptors(ClassSerializerInterceptor)
    update(@Body() usuario: UpdateUsuarioDto): Promise<Usuario>{
        return this.usuariosService.update(usuario)
    }

    @Delete(':id')
    remove(@Param() params){
        this.usuariosService.remove(params);
        return {status: HttpStatus.OK}
    }
    
    @Post('upload')
    @UseInterceptors(FilesInterceptor('files'))
    @ApiResponse({ status: 200, description: 'The record has been successfully created.'})
    upload(@UploadedFiles() files): string {        
        console.log(files);
        return 'ok'
    }

}
