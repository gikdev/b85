import { Injectable, NotFoundException } from "@nestjs/common"
import { CreateLinkDto } from "./dtos/create-link.dto"
import { UpdateLinkDto } from "./dtos/update-link.dto"
import { PrismaService } from "src/prisma/prisma.service"
import { ShortCodeService } from "./short-code.service"

@Injectable()
export class LinksService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly shortCodeService: ShortCodeService,
  ) {}

  async createNew(createLinkDto: CreateLinkDto) {
    const shortCode =
      createLinkDto.shortCode ?? this.shortCodeService.generateShortCode()

    const link = await this.prisma.link.create({
      data: {
        ...createLinkDto,
        shortCode,
      },
      include: {
        clicks: true,
      }
    })

    return { link }
  }

  async findAll() {
    const links = await this.prisma.link.findMany({
      include: {
        clicks: true,
      },
    })

    return { links }
  }

  async findOneByIdOrThrow(id: number) {
    const link = await this.prisma.link.findUnique({
      where: { id },
      include: {
        clicks: true,
      },
    })

    if (!link) throw new NotFoundException(`Link #${id} was not found!`)

    return { link }
  }

  async findOneByCodeOrNull(code: string) {
    const link = await this.prisma.link.findUnique({
      where: { shortCode: code },
      include: {
        clicks: true,
      },
    })

    return { link }
  }

  async updateOneById(id: number, updateLinkDto: UpdateLinkDto) {
    try {
      const link = await this.prisma.link.update({
        data: updateLinkDto,
        where: { id },
        include: {
          clicks: true,
        },
      })

      return { link }
    } catch (err) {
      if (err.code === "P2025")
        throw new NotFoundException(`Link #${id} was not found!`)
      else throw err
    }
  }

  async deleteOneById(id: number) {
    try {
      await this.prisma.link.delete({
        where: { id },
      })

      return { id }
    } catch (err) {
      if (err.code === "P2025")
        throw new NotFoundException(`Link #${id} was not found!`)
      else throw err
    }
  }
}
