import js from '@eslint/js'
import eslintPluginImportX from 'eslint-plugin-import-x'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import svelte from 'eslint-plugin-svelte'
import {readFileSync as r} from 'fs'
import globals from 'globals'

const prep_globals = s => Object.fromEntries(s.split(' ').map(g => [g, 'readonly']))
const globals_all = {
    ...prep_globals(
        r('src/auto-imports.d.ts', 'utf8')
            .match(/const (\w+):/g)
            .map(x => x.slice(6, -1))
            .join(' '),
    ),
    ...prep_globals('Sentry'),
}

/** @type {import('eslint').Linter.Config[]} */
export default [
    js.configs.recommended,
    ...svelte.configs['flat/recommended'],
    {
        ignores: [
            'misc/**/*',
            ...'node_modules,dist,dist-native,android,ios,public'
                .split(',')
                .map(x => x + '/**/*'),
            'build.js',
        ],
    },
    {
        files: ['**/*.js'],
        languageOptions: {
            globals: {...globals.es2021, ...globals.browser, ...globals_all},
        },
    },
    {
        files: ['vite.config.js', 'postcss.config.js'],
        languageOptions: {
            globals: {...globals.es2021, ...globals.node},
        },
    },
    {
        files: ['**/*.svelte'],
        languageOptions: {
            globals: {...globals.es2021, ...globals.browser, ...globals_all},
        },
        rules: {
            'no-inner-declarations': 'off',
            'no-self-assign': 'off',
            'svelte/no-at-html-tags': 'off',
            'svelte/require-each-key': 'off',
            'svelte/valid-compile': ['error', {ignoreWarnings: true}],
            'no-unused-vars': ['error', {argsIgnorePattern: '^_', varsIgnorePattern: '^_'}],
        },
    },
    {
        plugins: {
            'simple-import-sort': simpleImportSort,
            'import-x': eslintPluginImportX,
        },
        rules: {
            'simple-import-sort/imports': 'error',
            'simple-import-sort/exports': 'error',
            'import-x/first': 'error',
            'import-x/newline-after-import': 'error',
            'import-x/no-duplicates': 'error',
            'import-x/extensions': [
                'error',
                'always',
                {
                    ignorePackages: true,
                },
            ],
        },
    },
]
