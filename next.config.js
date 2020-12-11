const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/
})

module.exports = withMDX({
    pageExtensions: ['js', 'jsx', "md", "mdx", "tsx", "ts"],
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
})
