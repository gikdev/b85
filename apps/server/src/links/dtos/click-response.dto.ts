import { Expose } from "class-transformer"

export class ClickResponseDto {
  @Expose()
  id: number

  @Expose()
  createdAt: string

  // @Expose()
  // linkId: number
}
