import { Controller } from '@nestjs/common';
import {
  CreateProductRequestDto,
  DecreaseStockRequestDto,
  FindOneRequestDto,
} from './product.dto';
import {
  CreateProductResponse,
  DecreaseStockResponse,
  FindOneResponse,
  ProductServiceController,
  ProductServiceControllerMethods,
} from './product.pb';
import { ProductService } from './product.service';

@Controller('product')
@ProductServiceControllerMethods()
export class ProductController implements ProductServiceController {
  constructor(private readonly productService: ProductService) {}

  public async findOne(request: FindOneRequestDto): Promise<FindOneResponse> {
    return this.productService.findOne(request);
  }

  public async createProduct(
    request: CreateProductRequestDto,
  ): Promise<CreateProductResponse> {
    return this.productService.createProduct(request);
  }

  public async decreaseStock(
    request: DecreaseStockRequestDto,
  ): Promise<DecreaseStockResponse> {
    return this.productService.decreaseStock(request);
  }
}
