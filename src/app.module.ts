import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosModule } from './usuarios/usuarios.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { AlunosModule } from './alunos/alunos.module';
import { TenancyModule } from './tenancy/tenancy.module';
import { Aluno } from './alunos/alunos.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "sqlite",
      database: "./mydb.sql",
      autoLoadEntities: true,
      synchronize: true,      
      entities: [Aluno]
    }),
    TypeOrmModule.forRoot({
      type: "sqlite",
      database: "./mydb1.sql",
      autoLoadEntities: true,
      synchronize: true,      
      entities: [Aluno],
      name: 'db1'
    }),
    
    UsuariosModule,
    AlunosModule,
    TenancyModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) { }
  
}
