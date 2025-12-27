# B85

My own full-stack app!

## Abbreviations

| Abbreviation            | Meaning            |
| ----------------------- | ------------------ |
| ctx                     | context            |
| res                     | response           |
| req                     | request            |
| db                      | database           |
| conn                    | connection         |
| str                     | string             |
| c, cfg, conf, config    | configuration      |
| doc                     | document           |
| o, opt, opts            | options            |
| app                     | application        |
| repo                    | repository         |

## Notes

- Annotate the enums used in APIs with `[JsonConverter(typeof(JsonStringEnumConverter))]` so that they will show properly in the OpenAPI definition and also the generated TypeScript code from the OpenAPI...

```csharp
[JsonConverter(typeof(JsonStringEnumConverter))]
public enum State {
  Development,
  Production,
}
```
