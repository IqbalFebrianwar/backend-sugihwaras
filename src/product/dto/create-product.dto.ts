import { Type } from "class-transformer";
import { ArrayMinSize, IsArray, IsNotEmpty, IsNumber, IsObject, IsString, ValidateNested, isArray, isNotEmpty } from "class-validator";
import { SizeProduct } from "./SizeProduct";
import { OrderVia } from "./OrderVia";

export class CreateProductDto {
    @IsNotEmpty()
    @IsString()
    title: string

    @IsNotEmpty()
    @IsNumber()
    rating: number

    @IsNotEmpty()
    @IsString()
    deskripsi: string

    @IsNotEmpty()
    @IsArray({message: 'image harus bertipe array'})
    @IsString({each: true})
    @ArrayMinSize(1)
    image: string[]

    @IsNotEmpty()
    @IsArray()
    @ArrayMinSize(1)
    @ValidateNested({each:true})
    @Type(()=> SizeProduct)
    size: SizeProduct[]

    @IsNotEmpty()
    @IsArray()
    @ArrayMinSize(1)
    @ValidateNested({each: true})
    @Type(()=> OrderVia)
    ordervia: OrderVia[]
    
    @IsNotEmpty()
    @IsArray()
    @ArrayMinSize(1)
    @IsString({ each: true })
    categoryIds: string[];
}

