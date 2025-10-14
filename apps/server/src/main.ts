import { NestFactory } from "@nestjs/core"
import { AppModule } from "./app.module"
import {
  INestApplication,
  ValidationPipe,
  VersioningType,
} from "@nestjs/common"
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger"
import { apiReference } from "@scalar/nestjs-api-reference"

class Main {
  private APP_PORT = process.env.APP_PORT ?? 3000

  public async bootstrap() {
    const app = await NestFactory.create(AppModule)

    this.setupVersioning(app)
    this.setupValidation(app)
    this.setupDocs(app)

    app.setGlobalPrefix("api", {
      exclude: ["l/:code"],
    })

    await app.listen(this.APP_PORT)

    this.showUrls()
  }

  private setupDocs(app: INestApplication) {
    const config = new DocumentBuilder()
      .setTitle("B85 Back-end")
      .addServer(`http://localhost:${this.APP_PORT}/api`)
      .setVersion("1.0")
      .build()

    const doc = SwaggerModule.createDocument(app, config)

    SwaggerModule.setup("docs/swagger", app, doc, {
      jsonDocumentUrl: "docs/swagger/json",
      yamlDocumentUrl: "docs/swagger/yaml",
    })

    app.use(
      "/docs/scalar",
      apiReference({
        content: doc,
        theme: "fastify",
        layout: "classic",
        defaultHttpClient: {
          targetKey: "js",
          clientKey: "fetch",
        },
        customCss: `
          * { 
            font-family: "JetBrains Mono Regular", "Courier New", monospace !important;
          }
          
          script,
          style,
          head,
          meta,
          link {
            font-family: initial !important;
          }
        `,
      }),
    )
  }

  private setupValidation(app: INestApplication) {
    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
      }),
    )
  }

  private setupVersioning(app: INestApplication) {
    app.enableVersioning({
      type: VersioningType.URI,
    })
  }

  private showUrls() {
    console.log("App running:")
    console.log(`  - Server:  http://localhost:${this.APP_PORT}/api`)
    console.log(`  - Swagger: http://localhost:${this.APP_PORT}/docs/swagger`)
    console.log(`  - Scalar:  http://localhost:${this.APP_PORT}/docs/scalar`)
  }
}

new Main().bootstrap()
