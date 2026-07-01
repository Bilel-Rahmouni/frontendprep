import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { getHtmlQuestions } from './banks/html.mjs'
import { getCssQuestions } from './banks/css.mjs'
import { getReactQuestions } from './banks/react.mjs'
import { getFrontendQuestions } from './banks/frontend.mjs'
import { shuffleQuestions } from '../lib/shuffleOptions.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const BANKS = [
  {
    file: 'html.mjs',
    exportName: 'getHtmlQuestions',
    levels: ['beginner', 'intermediate', 'advanced'],
    loader: getHtmlQuestions,
  },
  {
    file: 'css.mjs',
    exportName: 'getCssQuestions',
    levels: ['beginner', 'intermediate', 'advanced'],
    loader: getCssQuestions,
  },
  {
    file: 'react.mjs',
    exportName: 'getReactQuestions',
    levels: ['beginner', 'intermediate', 'advanced'],
    loader: getReactQuestions,
  },
  {
    file: 'frontend.mjs',
    exportName: 'getFrontendQuestions',
    levels: ['beginner', 'intermediate', 'advanced'],
    loader: getFrontendQuestions,
  },
]

function levelConst(level) {
  return level.toUpperCase()
}

function writeBank({ file, exportName, levels, loader }) {
  const parts = levels.map((level) => {
    const raw = loader(level)
    const shuffled = shuffleQuestions(raw)
    return `const ${levelConst(level)} = ${JSON.stringify(shuffled, null, 2)};`
  })

  const switchCases = levels
    .map((level) => `    case '${level}':\n      return ${levelConst(level)};`)
    .join('\n')

  const content = `${parts.join('\n\n')}

/** @param {'beginner' | 'intermediate' | 'advanced'} level */
export function ${exportName}(level) {
  switch (level) {
${switchCases}
    default:
      throw new Error(\`Unknown level: \${level}\`);
  }
}
`

  fs.writeFileSync(path.join(__dirname, 'banks', file), content)
  console.log(`Updated ${file}`)
}

for (const bank of BANKS) {
  writeBank(bank)
}

console.log('Done — option order shuffled for all 1200 questions.')
