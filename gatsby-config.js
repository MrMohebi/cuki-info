module.exports = {
    siteMetadata: {
        title: `Cuki`,
        siteUrl: `https://cukim.ir`,
        description: `What do you eat? :)`,
    },
    flags: {
        // FAST_REFRESH:true,
        PRESERVE_FILE_DOWNLOAD_CACHE:true,
        FAST_DEV:true,
        PARALLEL_SOURCING:true,
        DEV_SSR:true,
    },
    plugins: [
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Cuki`,
                short_name: `Cuki`,
                start_url: `/`,
                background_color: `#0E3FA6`,
                theme_color: `#a2466c`,
                display: `standalone`,
                icon: `src/images/favicon.png`
            },
        },
        `gatsby-plugin-react-helmet`
    ]
}