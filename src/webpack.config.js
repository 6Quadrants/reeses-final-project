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



module.exports = {
    module: {
      rules: [
        {
          test: /\.(png|jpg|gif)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 8192
              }
            }
          ]
        }
      ]
    }
  }

  module.exports = {
    module: {
      rules: [
        {
          test: /\.(png|jpg|gif)$/,
          use: [
            {
              loader: 'file-loader',
              options: {}  
            }
          ]
        }
      ]
    }
  }
  