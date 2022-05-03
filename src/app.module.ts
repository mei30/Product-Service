import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';

@Module({
  imports: [
    ProductModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '127.0.0.1',
      port: 5432,
      database: 'micro_product',
      username: 'postgres',
      password: '4040',
      autoLoadEntities: true,
      synchronize: true, // never true in production!
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
