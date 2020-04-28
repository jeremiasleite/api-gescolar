import { IsEmail, IsNotEmpty, Length } from 'class-validator';

export class CreateUsuarioDto {
    @IsEmail()
    readonly email: string;

    @IsNotEmpty()
    readonly password: string;

    @IsNotEmpty()
    @Length(5,30)
    readonly username: string;   

}