import { Global, Module, Scope } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { getConnection } from 'typeorm';

const connectionFactory = {
    provide: 'CONNECTION',
    scope: Scope.REQUEST,
    useFactory: (req) => {
        const tenant = req.headers.tenant;        
        return getConnection(tenant);
    },
    inject: [REQUEST],
};

@Global()
@Module({    
    providers: [connectionFactory],
    exports: ['CONNECTION'],
})
export class TenancyModule {}