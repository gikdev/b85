# ✅ **1. Prompt for Adding Proper JSDoc / TSDoc / C# XML Documentation**

### **Short version**

```
Add full documentation comments (JSDoc/TSDoc/C# XML docs depending on the code language) to the following code. Explain all parameters, return values, exceptions, side effects, and usage examples. Improve clarity but don’t change any logic.
```

### **Expanded version**

```
Please add high–quality documentation to the following code. Use the appropriate style for the language:
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
[PASTE CODE]
```

---

# ✅ **2. Prompt for Renaming / Refactoring Names**

### **Short version**

```
Suggest clearer, more expressive names for the variables, functions, and classes in this code. Keep semantics but improve readability, intent, and domain relevance.
```

### **Expanded version**

```
Improve the naming in this code. Replace vague or unclear names with descriptive, domain-specific alternatives. Follow the naming conventions for the language (camelCase, PascalCase, etc).

Rules:
- Preserve the original behavior
- Avoid abbreviations unless standard (e.g., ID, URL)
- Ensure names clearly express intent
- Suggest optional alternative naming styles (functional, domain-driven, etc.)

Here is the code:
[PASTE CODE]
```

---

# ✅ **3. Prompt for Code Cleanup / Best Practices**

*(Great for all languages: TS/JS/C#/etc.)*

### **Short version**

```
Refactor this code to follow clean code and best practices, without changing the behavior.
```

### **Expanded version**

```
Refactor the code below to improve clarity, maintainability, and best practices. Keep the behavior identical. Apply improvements such as:
- Reducing repetition
- Splitting large functions into smaller ones
- Improving readability
- Using proper naming conventions
- Eliminating dead code
- Ensuring single responsibility

Don’t rewrite APIs or change the architectural structure unless absolutely necessary.

Code:
[PASTE CODE]
```

---

# ✅ **4. Prompt for Improving Type Safety (TypeScript / C#)**

### **Short version**

```
Improve the type safety of this code. Add missing types, interfaces, generics, and constraints.
```

### **Expanded version**

```
Improve type safety in the following TypeScript/C# code. Add:
- Missing type annotations
- Interfaces or types for objects
- Generics where appropriate
- Stricter null checking
- Return types for all functions
- Better naming for types

Don't change the functionality.

Code:
[PASTE CODE]
```

---

# ✅ **5. Prompt for Explaining Code in Simple Terms**

### **Short version**

```
Explain this code in simple terms as if you're teaching a beginner, step by step.
```

### **Expanded version**

```
Explain the following code in simple, beginner-friendly terms. 
Include:
- What each piece does
- How the parts work together
- Why certain decisions were made
- Any gotchas or pitfalls
- A simplified analogy if relevant

Code:
[PASTE CODE]
```

---

# ✅ **6. Prompt for Converting Code (JS → TS, TS → JS, C# → JS, etc.)**

### **Short version**

```
Convert this code to [TARGET LANGUAGE] with best practices.
```

### **Expanded version**

```
Convert the following code to [TARGET LANGUAGE] using idiomatic patterns and best practices for that language. Maintain behavior. Improve:
- Naming
- Structure
- Types (if applicable)
- Error handling
- Readability

Code:
[PASTE CODE]
```

---

# ✅ **7. Prompt for Adding Unit Tests**

### **Short version**

```
Write unit tests for this code using [Jest / xUnit / NUnit / etc.].
```

### **Expanded version**

```
Generate unit tests for the following code using [TESTING FRAMEWORK]. Include:
- Normal cases
- Edge cases
- Error handling
- Boundary conditions
- Mocking/stubbing if needed

Keep tests clean and focused on behavior.

Code:
[PASTE CODE]
```
