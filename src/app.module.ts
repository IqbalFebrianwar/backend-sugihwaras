import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { CategoryModule } from './category/category.module';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
import { SizeproductModule } from './sizeproduct/sizeproduct.module';

@Module({
  imports: [UserModule, ProductModule, CategoryModule, AuthModule, SizeproductModule],
  controllers: [AppController, AuthController],
  providers: [AppService],
})
export class AppModule {}
