import {
  Controller,
  Get,
  HttpStatus,
  Param,
  Redirect,
  Res,
} from "@nestjs/common"
import { LinksService } from "src/links/links.service"
import { PrismaService } from "src/prisma/prisma.service"
import type { Response } from "express"
import { ApiSummary } from "src/common/decorators/api-summary.decorator"
import { ApiExcludeEndpoint } from "@nestjs/swagger"
import { NOT_FOUND_HTML } from "./not-found-html.constant"

@Controller("")
export class RedirectController {
  constructor(
    private readonly linksService: LinksService,
    private readonly prisma: PrismaService,
  ) {}

  @ApiSummary("Redirect to link by code")
  @Get("l/:code")
  @Redirect()
  async redirectOneByCode(@Param("code") code: string) {
    const { link } = await this.linksService.findOneByCodeOrNull(code)

    if (!link) {
      return {
        url: "/not-found",
        statusCode: HttpStatus.FOUND,
      }
    }

    await this.prisma.click.create({
      data: { linkId: link.id },
    })

    return {
      url: link.originalUrl,
      statusCode: HttpStatus.FOUND,
    }
  }

  // 404 page route
  @Get("not-found")
  @ApiExcludeEndpoint()
  getNotFound(@Res() res: Response) {
    return res
      .status(HttpStatus.NOT_FOUND)
      .header("Content-Type", "text/html; charset=utf-8")
      .send(NOT_FOUND_HTML)
  }
}
