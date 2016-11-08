# strings-webpack-plugin

print strings found in the output that match a whitelist of strings

## Usage

webpack.config.js
```js
var StringsPlugin = require('strings-webpack-plugin');

module.exports = {
   ...
   plugins: [
        new StringsPlugin({
            strings: ['asdf']
            file: path.resolve(__dirname, 'strings.json')
        })
    ]
}
```
