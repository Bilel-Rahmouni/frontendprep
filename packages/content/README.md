# `@frontendprep/content`

Shared quiz banks, guides, tips, and catalog for the web site and mobile app.

Source of truth still lives in the repo root (`data/`, `scripts/banks/`). This package re-exports that content so both apps import one package name:

```js
import { PARTS, loadQuestions, GUIDES } from '@frontendprep/content'
```
