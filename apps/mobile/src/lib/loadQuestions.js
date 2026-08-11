/**
 * Metro cannot reliably resolve dynamic imports into scripts/banks/*.mjs.
 * Use the content package lazy bank loaders (Metro-friendly + cached).
 */
import { InteractionManager } from 'react-native'
import { loadQuestions as loadFromContent } from '../../../../packages/content/src/questions.js'

export function loadQuestions(partId, levelId) {
  return new Promise((resolve, reject) => {
    const task = InteractionManager.runAfterInteractions(() => {
      loadFromContent(partId, levelId).then(resolve, reject)
    })
    // Older RN returns a cancelable handle; ignore if plain void
    void task
  })
}
