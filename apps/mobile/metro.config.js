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
config.resolver.extraNodeModules = {
  '@frontendprep/content': path.resolve(workspaceRoot, 'packages/content'),
}

// Treat .mjs banks as JS source (not assets)
config.resolver.assetExts = config.resolver.assetExts.filter((ext) => ext !== 'mjs')
config.resolver.sourceExts = [...new Set([...config.resolver.sourceExts, 'mjs', 'js'])]

// Defer evaluating require()d modules (question banks) until first use
config.transformer = {
  ...config.transformer,
  getTransformOptions: async () => ({
    transform: {
      experimentalImportSupport: false,
      inlineRequires: true,
    },
  }),
}

module.exports = config
