import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  Version,
} from "@nestjs/common"
import { ApiSummary } from "src/common/decorators/api-summary.decorator"
import { ParamId } from "src/common/decorators/param-id.decorator"
import { CreateLinkDto } from "./dtos/create-link.dto"
import { UpdateLinkDto } from "./dtos/update-link.dto"
import { LinksService } from "./links.service"
import { plainToInstance } from "class-transformer"
import { LinkResponseDto } from "./dtos/link-response.dto"
import { DeletedResopnseDto } from "src/common/dtos/deleted-response.dto"

@Controller("links")
export class LinksController {
  constructor(private readonly linksService: LinksService) {}

  @ApiSummary("Create a link")
  @Version("1")
  @Post()
  async createNew(@Body() createLinkDto: CreateLinkDto) {
    const { link } = await this.linksService.createNew(createLinkDto)

    return plainToInstance(LinkResponseDto, link, {
      excludeExtraneousValues: true,
    })
  }

  @ApiSummary("Get all links")
  @Version("1")
  @Get()
  async findAll() {
    const { links } = await this.linksService.findAll()

    return plainToInstance(LinkResponseDto, links, {
      excludeExtraneousValues: true,
    })
  }

  @ApiSummary("Get a link")
  @Version("1")
  @Get(":id")
  async findOneById(@ParamId() id: number) {
    const { link } = await this.linksService.findOneByIdOrThrow(id)

    return plainToInstance(LinkResponseDto, link, {
      excludeExtraneousValues: true,
    })
  }

  @ApiSummary("Update a link by ID")
  @Version("1")
  @Patch(":id")
  async updateOneById(
    @ParamId() id: number,
    @Body() updateLinkDto: UpdateLinkDto,
  ) {
    const { link } = await this.linksService.updateOneById(id, updateLinkDto)

    return plainToInstance(LinkResponseDto, link, {
      excludeExtraneousValues: true,
    })
  }

  @ApiSummary("Delete a link by ID")
  @Version("1")
  @Delete(":id")
  async deleteOneById(@ParamId() id: number) {
    await this.linksService.deleteOneById(id)

    return plainToInstance(
      DeletedResopnseDto,
      { id },
      { excludeExtraneousValues: true },
    )
  }
}
