import {svelte} from '@sveltejs/vite-plugin-svelte'
import path from 'path'
import {execFileSync as exec} from 'child_process'
import pkg from './package.json'
import AutoImport from 'unplugin-auto-import/vite'

const is_build = process.argv.includes('build')

const vars = {
    'window.__BUILD_DATE__': `'${new Date().toISOString()}'`,
    'window.__BUILD_HASH__': `'${exec('git rev-parse --short HEAD || true', {shell: true}).toString().trim()}'`,
    'window.__APP_VERSION__': `'${pkg.version}'`,
    'window.__DEBUG__': !is_build,
}

/** @type {import('vite').UserConfig}*/
export default {
    publicDir: is_build ? false : 'public',
    build: {
        reportCompressedSize: false,
        minify: false,
        sourcemap: true,
        lib: {
            entry: 'src/main.js',
            formats: ['es'],
            fileName: format => `bundle.${format}.js`,
        },
        rollupOptions: {
            input: './index.html',
            output: {
                inlineDynamicImports: true,
                intro: Object.entries(vars).map(([k, v]) => `${k} = ${v}`).join('\n'),
            },
        },
    },
    server: {host: !!process.env.VITE_HOST},
    resolve: {
        alias: [{find: '~', replacement: path.resolve('src')}],
    },
    define: is_build ? {} : vars,
    plugins: [
        svelte({
            onwarn(warning, handler) {
                const IGNORED_WARNINGS = [
                    'a11y_autofocus',
                    'a11y_click_events_have_key_events',
                    'a11y_no_static_element_interactions',
                    'a11y_label_has_associated_control',
                    'a11y_no_noninteractive_element_interactions',
                ]
                if (!IGNORED_WARNINGS.includes(warning.code))
                    handler(warning)
            },
        }),
        AutoImport({
            imports: [
                'svelte',
                'svelte/store',
                'svelte/transition',
                'svelte/animate',
            ],
            dts: './src/auto-imports.d.ts',
        }),
    ],
}
