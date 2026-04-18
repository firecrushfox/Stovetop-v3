import { readdirSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { defineConfig } from 'vite';
import basicSsl from '@vitejs/plugin-basic-ssl';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import { createRecipeSummary } from './src/lib/recipe-parser.js';

const RECIPE_INDEX_MODULE_ID = 'virtual:recipe-index';
const RESOLVED_RECIPE_INDEX_MODULE_ID = '\0virtual:recipe-index';

export default defineConfig(({ mode, command }) => {
  const useHttps = mode === 'https' || mode === 'https-pwa';
  const enableDevPwa = mode === 'pwa-dev' || mode === 'https-pwa';
  const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1] || 'Stovetop-v3';
  const isGitHubPagesBuild = process.env.GITHUB_ACTIONS === 'true';
  const base = isGitHubPagesBuild ? `/${repositoryName}/` : '/';

  return {
    base,
    server: {
      port: 4173,
      https: useHttps
    },
    preview: {
      port: 4174,
      https: useHttps
    },
    plugins: [
      recipeIndexPlugin(command),
      react(),
      useHttps && basicSsl(),
      VitePWA({
        registerType: 'autoUpdate',
        devOptions: {
          enabled: enableDevPwa
        },
        includeAssets: [
          'favicon.ico',
          'favicon-180x180.png',
          'favicon-192x192.png',
          'favicon-512x512.png'
        ],
        manifest: {
          id: base,
          name: 'Stovetop',
          short_name: 'Stovetop',
          description: 'A PWA recipe organizer powered by Markdown files.',
          theme_color: '#1a3d1a',
          background_color: '#f5f0e6',
          scope: base,
          display: 'standalone',
          display_override: ['standalone'],
          start_url: base,
          categories: ['food', 'lifestyle', 'productivity'],
          icons: [
            {
              src: 'favicon-192x192.png',
              sizes: '192x192',
              type: 'image/png',
              purpose: 'any'
            },
            {
              src: 'favicon-512x512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'maskable'
            }
          ]
        },
        workbox: {
          globPatterns: ['**/*.{js,css,html,ico,png,md}']
        }
      })
    ]
  };
});

function recipeIndexPlugin(command) {
  return {
    name: 'stovetop-recipe-index',
    resolveId(source) {
      if (source === RECIPE_INDEX_MODULE_ID) {
        return RESOLVED_RECIPE_INDEX_MODULE_ID;
      }

      return null;
    },
    load(id) {
      if (id !== RESOLVED_RECIPE_INDEX_MODULE_ID) {
        return null;
      }

      const projectRoot = process.cwd();
      const recipesRoot = path.join(projectRoot, 'recipes');
      const entries = collectRecipeFiles(recipesRoot).map((absolutePath) => {
        const relativePath = path.relative(recipesRoot, absolutePath).split(path.sep).join('/');
        const modulePath = `../../recipes/${relativePath}`;
        const raw = readFileSync(absolutePath, 'utf8');
        const summary = createRecipeSummary(modulePath, raw);

        return {
          ...summary,
          path: modulePath
        };
      });

      if (command === 'serve') {
        return `export const recipeIndexData = ${JSON.stringify(entries)};\nexport const recipeIndexUrl = null;`;
      }

      const assetReferenceId = this.emitFile({
        type: 'asset',
        name: 'recipe-index.json',
        source: JSON.stringify(entries)
      });

      return `export const recipeIndexData = null;\nexport const recipeIndexUrl = import.meta.ROLLUP_FILE_URL_${assetReferenceId};`;
    }
  };
}

function collectRecipeFiles(rootDir) {
  const entries = [];

  for (const entry of readdirSync(rootDir, { withFileTypes: true })) {
    const absolutePath = path.join(rootDir, entry.name);

    if (entry.isDirectory()) {
      entries.push(...collectRecipeFiles(absolutePath));
      continue;
    }

    if (entry.isFile() && absolutePath.endsWith('.md')) {
      entries.push(absolutePath);
    }
  }

  return entries.sort((left, right) => left.localeCompare(right));
}
