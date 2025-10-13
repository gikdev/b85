import { Controller, Get, Header, Version } from "@nestjs/common"
import { ApiTags } from "@nestjs/swagger"
import { PrismaService } from "src/prisma/prisma.service"
import { ApiSummary } from "src/shared/decorators/api-summary.decorator"

@Controller("")
@ApiTags("Misc.")
export class MiscController {
  constructor(private readonly prisma: PrismaService) {}

  @ApiSummary("Export all data in the DB")
  @Get("export-data")
  @Version("1")
  @Header("Content-Disposition", 'attachment; filename="data.json"')
  @Header("Content-Type", "application/json")
  async exportData() {
    const links = await this.prisma.link.findMany()
    const clicks = await this.prisma.click.findMany()

    const data = {
      links,
      clicks,
    }

    return data
  }
}
