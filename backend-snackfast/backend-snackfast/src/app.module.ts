import { Module } from '@nestjs/common'; 
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CompradorModule } from './comprador/comprador.module';
import { ProductoModule } from './producto/producto.module';
import { PedidoModule } from './pedido/pedido.module';
import { CategoriaModule } from './categoria/categoria.module';
import { VendedorModule } from './vendedor/vendedor.module';
import { PedidoHasProductoModule } from './pedido-has-producto/pedido-has-producto.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql', 
      host: 'localhost', 
      port: 3306,//3308, // Cambia a 3306 si es necesario
      username: 'root', 
      password: '1234', // Asegúrate de que este valor sea correcto
      database: 'snackfast', 
      entities: [__dirname + '/**/*.entity{.ts,.js}'], 
      synchronize: false, // true crea las migraciones automaticamente,false es una por una
    }),
    CompradorModule,
    ProductoModule,
    PedidoModule,
    CategoriaModule,
    VendedorModule,
    PedidoHasProductoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
