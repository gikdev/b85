import { TextPrompt } from "./prompt"

export const CONVENTIONAL_COMMIT = new TextPrompt<"input">(`
You are a Git commit message assistant.
Take the following commit description and convert it into a proper **Conventional Commit** message, following the format:

type(scope?): short description

Optionally, add a more detailed body explaining the changes.
Make the output concise, clear, and in imperative tense.
Use appropriate types like feat, fix, chore, docs, style, refactor, perf, test, etc.
Respond ONLY with the conventional commit message.
Commit description:

{{input}}
`)

export const EXPLAIN_CONCEPT = new TextPrompt<"input">(`
You are a technical instructor who explains complex topics with clarity.
Take the following concept and explain it in simple, beginner-friendly terms.

Requirements:
- Use clear language and avoid jargon unless explained.
- Provide a step-by-step breakdown.
- Include a real-world analogy.
- Offer a short example to reinforce understanding.
- Keep the explanation concise but complete.

Respond ONLY with the explanation.  
Concept:

{{input}}
`)

export const ADD_CODE_DOCS = new TextPrompt<"input">(`
Please add high-quality documentation to the following code.
Use the appropriate style for the language:
- JavaScript → JSDoc
- TypeScript → TSDoc
- C# → XML documentation comments

Requirements:
- Describe purpose and behavior
- Document all parameters and return values
- Include constraints (nullable, type limits, invariants)
- Mention side effects or mutating behavior
- Add a short usage example if applicable
- Keep logic unchanged

Here is the code:
{{input}}
`)

export const REFACTOR_NAMES = new TextPrompt<"input">(`
Improve the naming in this code.
Replace vague or unclear names with descriptive, domain-specific alternatives.
Follow the naming conventions for the language (camelCase, PascalCase, etc).

Rules:
- Preserve the original behavior
- Avoid abbreviations unless standard (e.g., ID, URL)
- Ensure names clearly express intent
- Suggest optional alternative naming styles (functional, domain-driven, etc.)

Here is the code:
{{input}}
`)

export const REFACTOR_CODE = new TextPrompt<"input">(`
Refactor the code below to improve clarity, maintainability, and best practices.
Keep the behavior identical.
Apply improvements such as:
- Reducing repetition
- Splitting large functions into smaller ones
- Improving readability
- Using proper naming conventions
- Eliminating dead code
- Ensuring single responsibility

Don't rewrite APIs or change the architectural structure unless absolutely necessary.

Code:
{{input}}
`)

export const IMPROVE_TYPE_SAFETY = new TextPrompt<"input">(`
Improve type safety in the following TypeScript/C# code.
Add:
- Missing type annotations
- Interfaces or types for objects
- Generics where appropriate
- Stricter null checking
- Return types for all functions
- Better naming for types

Don't change the functionality.

Code:
{{input}}
`)

export const EXPLAIN_CODE_IN_SIMPLE_TERMS = new TextPrompt<"input">(`
Explain the following code in simple, beginner-friendly terms. 
Include:
- What each piece does
- How the parts work together
- Why certain decisions were made
- Any gotchas or pitfalls
- A simplified analogy if relevant

Code:
{{input}}
`)

export const WRITE_SOME_UNIT_TEST = new TextPrompt<"input">(`
Generate unit tests for the following code using Vitest OR xUnit. Include:
- Normal cases
- Edge cases
- Error handling
- Boundary conditions
- Mocking/stubbing if needed

Keep tests clean and focused on behavior.

Code:
{{input}}
`)
