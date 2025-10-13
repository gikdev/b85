import { Module } from "@nestjs/common"
import { PrismaModule } from "./prisma/prisma.module"
import { LinksModule } from "./links/links.module"
import { MiscController } from "./app/misc.controller"
import { RedirectController } from "./app/redirect.controller"

@Module({
  controllers: [RedirectController, MiscController],
  imports: [PrismaModule, LinksModule],
})
export class AppModule {}
