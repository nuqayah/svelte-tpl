import {fontFamily} from 'tailwindcss/defaultTheme'
import plugin from 'tailwindcss/plugin'

/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.svelte', './node_modules/components/src/*.svelte'],

    corePlugins: {
        container: false,
    },
    theme: {
        extend: {
            fontFamily: {
                prose: ['Kitab', ...fontFamily.serif],
            },
            listStyleType: {
                arabic: 'arabic-indic',
            },
        },
    },
    plugins: [
        plugin(function ({addBase}) {
            addBase({
                'html[dir="rtl"]': {
                    fontFamily: ['SafariFakeFont', 'Noto', ...fontFamily.sans].join(', '),
                },
            })
        }),
    ],
}
