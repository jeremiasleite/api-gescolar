import { IsEmail, IsNotEmpty, Length, IsNumber, IsOptional, IsBoolean } from 'class-validator';

export class UpdateUsuarioDto {
    @IsNotEmpty()
    @IsNumber()
    readonly id: number;
    
    @IsEmail()
    @IsOptional()  
    readonly email?: string;

    @IsNotEmpty()
    @Length(5,30)
    @IsOptional()
    readonly username?: string;
    
    @IsNotEmpty()
    @IsOptional()
    @IsBoolean()
    readonly isActive?: boolean;

}