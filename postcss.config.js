const prod = process.env.NODE_ENV === 'production'
export default {
    plugins: {
        '@tailwindcss/postcss': 'postcss-nesting',
        '@csstools/postcss-is-pseudo-class': prod && {},
        autoprefixer: prod && {},
        cssnano: prod && {
            preset: ['default', {normalizeUrl: false, discardComments: {removeAll: true}}],
        },
    }
}
