module.exports = {
    css: {
        loaderOptions: {
            sass: {
                prependData: `
                    @import "@/styles/_variables.scss";
                    @import "@/styles/button.scss";
                `
            }
        }
    }
}