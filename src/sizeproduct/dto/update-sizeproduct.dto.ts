import { PartialType } from '@nestjs/mapped-types';
import { CreateSizeproductDto } from './create-sizeproduct.dto';

export class UpdateSizeproductDto extends PartialType(CreateSizeproductDto) {}
