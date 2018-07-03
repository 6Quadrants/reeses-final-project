const GoogleFontsPlugin = require("google-fonts-webpack-plugin");
 




module.exports = {
    "entry": "index.js",
    /* ... */
    plugins: [
        new GoogleFontsPlugin({
            fonts: [
                { family: "Montserrat", variants: [ "600", "800 "] },
                { family: "Raleway", variants: [ "500", "700" ] }
            ]
            /* ...options */
        })
    ]
}



