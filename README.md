# strings-webpack-plugin

print strings found in the output that match a whitelist of strings

## Usage

```js
import StringsPlugin from 'strings-webpack-plugin';
{
   ...
   plugins: [
        new StringsPlugin({
            strings: ['asdf']
            file: path.resolve(__dirname, 'strings.json')
        })
    ]
}
```
