# @prover-coder-ai/component-tagger

Vite plugin that adds a single `path` attribute to every JSX opening tag.

Example output:

```html
<h1 path="src/App.tsx:22:4">Hello</h1>
```

Format: `<relative-file-path>:<line>:<column>`

## Usage

```ts
import { defineConfig, type PluginOption } from "vite"
import { componentTagger } from "@prover-coder-ai/component-tagger"

export default defineConfig(({ mode }) => {
  const isDevelopment = mode === "development"
  const plugins = [isDevelopment && componentTagger()].filter(Boolean) as PluginOption[]

  return { plugins }
})
```
