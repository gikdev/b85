/**
 * Represents a text-based template that supports variable interpolation.
 *
 * This class stores a string template and allows rendering it by replacing
 * variable placeholders of the form `{{ variableName }}` with actual values.
 *
 * @typeParam K - A string literal union representing the allowed template variable keys.
 *
 * @example
 * ```ts
 * const prompt = new TextPrompt<"name" | "city">(
 *   "Hello {{ name }}, welcome to {{ city }}!"
 * )
 *
 * const result = prompt.render({
 *   name: "Alice",
 *   city: "London",
 * })
 *
 * console.log(result)
 * // → "Hello Alice, welcome to London!"
 * ```
 */
export class TextPrompt<K extends string = string> {
  /**
   * The raw template string containing optional `{{variable}}` placeholders.
   *
   * @remarks
   * - May include any characters.
   * - Placeholders must follow the `{{ key }}` pattern.
   * - This value is assigned once in the constructor and never mutated.
   */
  public body: string

  /**
   * Creates a new {@link TextPrompt} instance.
   *
   * @param template - The template string containing zero or more `{{ key }}` placeholders.
   *
   * @example
   * ```ts
   * const p = new TextPrompt("Hello {{ name }}");
   * ```
   */
  constructor(template: string) {
    this.body = template
  }

  /**
   * Renders the template by replacing all `{{ key }}` placeholders with values
   * provided in the `variables` map.
   *
   * @param variables - A record mapping each template key `K` to a string value.
   *   - Keys must match the placeholder names inside the template.
   *   - Missing keys result in an empty string.
   *
   * @returns The final rendered string after all replacements.
   *
   * @throws No exceptions: missing variables simply resolve to an empty string.
   *
   * @remarks
   * - This method does **not** mutate the original template.
   * - Whitespace inside placeholders is ignored:
   *   - Example: `{{  name   }}` resolves to `"name"`.
   * - All placeholders are replaced globally.
   */
  public render(variables: Record<K, string>): string {
    return this.body.replace(/{{(.*?)}}/g, (_, key: string) => {
      const trimmed = key.trim() as K
      return variables[trimmed] ?? ""
    })
  }
}
