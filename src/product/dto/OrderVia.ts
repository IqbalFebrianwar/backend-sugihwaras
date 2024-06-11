import { IsNotEmpty, IsString } from "class-validator";

export class OrderVia{
    @IsNotEmpty()
    @IsString()
    title: string

    @IsNotEmpty()
    @IsString()
    path: string

    @IsNotEmpty()
    @IsString()
    type: string
}
