import { ApiProperty } from "@nestjs/swagger"

export class UsuariosDto{
    @ApiProperty()
    nome: string

    @ApiProperty()
    id: number

    constructor( nome: string, id: number ){
        this.nome = nome
        this.id = id
    }
}
export class CreateUsuarioDto{
    @ApiProperty()
    nome: string
    constructor(nome: string){
        this.nome = nome
    }
}