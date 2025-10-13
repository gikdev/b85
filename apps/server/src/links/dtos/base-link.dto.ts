import { IsNotEmpty, IsOptional, IsString } from "class-validator"

export class BaseLinkDto {
  @IsString()
  @IsNotEmpty()
  name: string

  @IsString()
  @IsNotEmpty()
  originalUrl: string

  @IsString()
  @IsOptional()
  shortCode?: string
}
