const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/
})
const withPWA = require('next-pwa')

module.exports = withPWA(withMDX({
    pageExtensions: ['js', 'jsx', "md", "mdx", "tsx", "ts"],
    pwa: {
        disable: process.env.NODE_ENV === 'development',
        dest: 'public'
    },
    webpack: (config) => {
    config.module.rules.push(
        ...[
        {
            test: /\.yml$/,
            type: "json",
            use: "yaml-loader",
        },
        {
            test: /\.svg$/,
            use: "@svgr/webpack",
        },
        ]
    )
    return config
    },
}))