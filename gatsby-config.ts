import type {GatsbyConfig} from "gatsby";

const config: GatsbyConfig = {
    siteMetadata: {
        title: `trafalgar-landing`,
        siteUrl: `http://localhost:8000`
    },
    graphqlTypegen: true,
    plugins: [
        "gatsby-plugin-postcss",
        "gatsby-plugin-image",
        "gatsby-transformer-remark",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                "name": "images",
                "path":  `./src/images`
            }
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                "name": "pages",
                "path": "./src/pages/"
            },
            __key: "pages"
        },
        {
            resolve: `gatsby-omni-font-loader`,
            options: {
                enableListener: true,
                preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
                web: [
                    {
                        name: `Mulish`,
                        file: `https://fonts.googleapis.com/css2?family=Mulish:wght@400;500;600;700&display=swap`,
                    },
                ],
            },
        }
        ]
};

export default config;
