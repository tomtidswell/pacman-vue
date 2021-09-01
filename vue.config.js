module.exports = {
    // css: {
    //     loaderOptions: {
    //         // scss: {
    //         //     additionalData: `@import "@/assets/styles/animations.scss";`,
    //         // },
    //         scss: {
    //             indentWidth: 4,
    //             includePaths: ['absolute/path/a', 'absolute/path/b'],
    //         },
    //     },
    // },
    chainWebpack: config => {
        config
        .plugin('vue-loader')
        .tap(options => {
                console.log(options)
                // modify the options...
                return options
            })
    }
};