# ✅ **Core Idea**

Define prompts as **typed objects** with:

* `id`
* `title`
* `template` (with placeholders like `{{variable}}`)
* `fields` (so your UI knows what form inputs to render)

Then write a helper to **render the template** with provided values.

---

# ✅ **1. Prompt Definition Type**

```ts
export type PromptFieldType =
  | "text"
  | "textarea"
  | "number"
  | "select"
  | "boolean";

export interface PromptField {
  key: string;
  label: string;
  type: PromptFieldType;
  required?: boolean;
  options?: string[]; // for select
}

export interface PromptTemplate {
  id: string;
  title: string;
  template: string; 
  fields: PromptField[];
}
```

---

# ✅ **2. Example Prompt Definitions**

### ✨ Example: “Add Documentation” Prompt

(You can define *many* prompts in one array.)

```ts
export const prompts: PromptTemplate[] = [
  {
    id: "addDocumentation",
    title: "Add Documentation to Code",
    template: `
Add full {{style}} documentation to the following code.
Document parameters, return values, side effects, and add an example.
Code:
{{code}}
    `,
    fields: [
      { key: "style", label: "Documentation Style", type: "select", options: ["JSDoc", "TSDoc", "C# XML"], required: true },
      { key: "code", label: "Code Snippet", type: "textarea", required: true }
    ]
  },

  {
    id: "renameVariables",
    title: "Rename Variables/Functions",
    template: `
Suggest clearer, more expressive names for the variables, functions, and classes in the following code.
Keep behavior unchanged.
Code:
{{code}}
    `,
    fields: [
      { key: "code", label: "Code Snippet", type: "textarea", required: true }
    ]
  }
];
```

You can define as many prompts as you want—this becomes your "prompt library."

---

# ✅ **3. Template Renderer**

A small function replaces `{{variable}}` placeholders.

```ts
export function renderPrompt<T extends Record<string, string | number | boolean>>(
  template: string,
  values: T
): string {
  return template.replace(/{{(.*?)}}/g, (_, key) => {
    return String(values[key.trim()] ?? "");
  });
}
```

Usage:

```ts
const p = prompts.find(p => p.id === "addDocumentation")!;
const filled = renderPrompt(p.template, {
  style: "TSDoc",
  code: "function add(a, b) { return a + b; }"
});

console.log(filled);
```

---

# ✅ **4. Auto-Generate Forms (React Example)**

This is what your UI can look like:

```tsx
function PromptForm({ template }: { template: PromptTemplate }) {
  const [values, setValues] = useState<Record<string, any>>({});

  const update = (key: string, val: any) =>
    setValues(v => ({ ...v, [key]: val }));

  return (
    <form className="flex flex-col gap-4">
      {template.fields.map(field => (
        <div key={field.key}>
          <label>{field.label}</label>

          {field.type === "text" && (
            <input
              type="text"
              required={field.required}
              onChange={e => update(field.key, e.target.value)}
            />
          )}

          {field.type === "textarea" && (
            <textarea
              required={field.required}
              onChange={e => update(field.key, e.target.value)}
            />
          )}

          {field.type === "select" && (
            <select
              required={field.required}
              onChange={e => update(field.key, e.target.value)}
            >
              <option value="">Select...</option>
              {field.options?.map(op => (
                <option key={op} value={op}>{op}</option>
              ))}
            </select>
          )}
        </div>
      ))}

      <button
        type="button"
        onClick={() => {
          const final = renderPrompt(template.template, values);
          console.log(final);
        }}
      >
        Generate Prompt
      </button>
    </form>
  );
}
```

---

# ✅ **5. Why This Approach Is Great**

* **Strongly typed** — TypeScript checks field consistency
* **Auto form generation** — UI builds itself from definition
* **Prompt templating** — Insert dynamic content into prompts
* **Expandable** — Add any new prompt by adding a new object
* **UI-agnostic** — Works with React, Vue, Svelte, Tauri, anything
* **Backend-friendly** — Can store templates in a JSON file
