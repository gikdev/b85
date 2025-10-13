import { Expose, Transform, Type } from "class-transformer"
import { ClickResponseDto } from "./click-response.dto"

export class LinkResponseDto {
  @Expose()
  id: number

  @Expose()
  name: string

  @Expose()
  shortCode: string

  @Expose()
  originalUrl: string

  @Expose()
  @Transform(p => p.obj.clicks.length || 0)
  numberOfClicks: number

  @Expose()
  @Type(() => ClickResponseDto)
  clicks: ClickResponseDto[]
}
