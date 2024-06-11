import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class SizeProduct{
    @IsNotEmpty()
    @IsString()
    size: string

    @IsNotEmpty()
    @IsNumber()
    harga: number
}
