const path = require('path')
const { getDefaultConfig } = require('expo/metro-config')

const projectRoot = __dirname
const workspaceRoot = path.resolve(projectRoot, '../..')

const config = getDefaultConfig(projectRoot)

// Resolve shared content + question banks from the monorepo root
config.watchFolders = [
  workspaceRoot,
  path.resolve(workspaceRoot, 'packages/content'),
  path.resolve(workspaceRoot, 'scripts/banks'),
  path.resolve(workspaceRoot, 'data'),
]
config.resolver.nodeModulesPaths = [
  path.resolve(projectRoot, 'node_modules'),
  path.resolve(workspaceRoot, 'node_modules'),
]
config.resolver.disableHierarchicalLookup = true
config.resolver.sourceExts = [...new Set([...config.resolver.sourceExts, 'mjs', 'js'])]
config.resolver.extraNodeModules = {
  '@frontendprep/content': path.resolve(workspaceRoot, 'packages/content'),
}

module.exports = config
