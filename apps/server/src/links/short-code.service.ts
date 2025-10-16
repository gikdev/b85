import { Injectable } from "@nestjs/common"

@Injectable()
export class ShortCodeService {
  private readonly DEFAULT_LENGTH = 4
  private readonly DEFAULT_CHARACTER_SET =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

  generateShortCode(
    length = this.DEFAULT_LENGTH,
    characterSet = this.DEFAULT_CHARACTER_SET,
  ) {
    let result = ""
    const charsLength = characterSet.length

    for (let i = 0; i < length; i++) {
      result += characterSet.charAt(Math.floor(Math.random() * charsLength))
    }

    return result
  }
}
