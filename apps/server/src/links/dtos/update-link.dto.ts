import { PartialType } from "@nestjs/swagger"
import { BaseLinkDto } from "./base-link.dto"

export class UpdateLinkDto extends PartialType(BaseLinkDto) {}
