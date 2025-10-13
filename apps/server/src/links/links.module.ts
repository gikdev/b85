import { Module } from "@nestjs/common"
import { LinksController } from "./links.controller"
import { LinksService } from "./links.service"
import { ShortCodeService } from "./short-code.service"

@Module({
  controllers: [LinksController],
  providers: [LinksService, ShortCodeService],
  exports: [LinksService],
})
export class LinksModule {}
