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
import { ApiSummary } from "src/shared/decorators/api-summary.decorator"

@Controller("")
export class RedirectController {
  private readonly NOT_FOUND_HTML = `
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>404 — Not Found</title>
        <style>
          /* Basic reset */
          html,body { height: 100%; margin: 0; }

          /* Page */
          body {
            display: flex;
            align-items: center;
            justify-content: center;
            background: #f7f9fc;
            color: #0f1724;
            font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", Arial, "Liberation Sans", sans-serif;
            -webkit-font-smoothing:antialiased;
            -moz-osx-font-smoothing:grayscale;
            line-height: 1.4;
            padding: 24px;
          }

          /* Card */
          .card {
            text-align: center;
            max-width: 720px;
            width: 100%;
            background: white;
            border-radius: 14px;
            padding: 48px 36px;
            box-shadow: 0 10px 30px rgba(16,24,40,0.08);
            border: 1px solid rgba(15,23,42,0.04);
          }

          /* Visual */
          .icon {
            display: inline-flex;
            width: 64px;
            height: 64px;
            align-items: center;
            justify-content: center;
            margin-bottom: 18px;
            border-radius: 12px;
            background: linear-gradient(180deg, rgba(11,119,255,0.08), rgba(11,119,255,0.02));
          }

          h1 {
            font-size: 36px;
            margin: 0 0 8px 0;
            font-weight: 700;
            letter-spacing: -0.01em;
          }

          p.lead {
            margin: 0 0 18px 0;
            color: #475569;
            font-size: 16px;
          }

          .meta {
            display: block;
            margin-top: 8px;
            color: #94a3b8;
            font-size: 13px;
          }

          @media (max-width:420px) {
            .card { padding: 28px 18px; }
            h1 { font-size: 28px; }
          }
        </style>
      </head>
      <body>
        <main class="card" role="main" aria-labelledby="title">
          <div class="icon" aria-hidden="true">
            <!-- simple magnifier + document icon -->
            <svg width="34" height="34" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M11 4a7 7 0 100 14 7 7 0 000-14z" stroke="#0B63FF" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M21 21l-4.35-4.35" stroke="#0B63FF" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>

          <h1 id="title">404 — Page not found</h1>
          <p class="lead">
            The short link you followed doesn’t exist, or it was removed.
            If you expected this to work, check the URL or contact the owner.
          </p>

          <span class="meta">Tip: short links can be deleted or disabled by their owner.</span>
        </main>
      </body>
    </html>
  `

  constructor(
    private readonly linksService: LinksService,
    private readonly prisma: PrismaService,
  ) {}

  @ApiSummary("Redirect to link by code")
  @Get("l/:code")
  @Redirect()
  async redirectOneByCode(
    @Param("code") code: string,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { link } = await this.linksService.findOneByCodeOrNull(code)

    if (!link) {
      res.status(HttpStatus.NOT_FOUND).send(this.NOT_FOUND_HTML)
      return
    }

    await this.prisma.click.create({
      data: { linkId: link.id },
    })

    return {
      url: link.originalUrl,
      statusCode: HttpStatus.FOUND,
    }
  }
}
