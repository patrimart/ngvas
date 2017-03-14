
/**
 * Allows regluar browser usage.
 */

module.exports = {
    context: __dirname,
    entry: "./lib/index.js",
    output: {
        path: __dirname + "/bundle",
        filename: "ngvas.umd.js",
        library: "ngvas",
        libraryTarget: "umd"
    },
    externals: [
        {
            NgvasModule: true,
            library: true,
        },
        /\@angular\/.+/
    ],
    target: "web"
};
