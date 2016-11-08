import debug from 'debug';
import fs from 'fs';

const log = debug('StringsWebpackPlugin');

export default class StringsWebpackPlugin {
    constructor(options) {
        this.strings = options.strings;
        this.file = options.file;
    }
    apply(compiler) {
        compiler.plugin('after-emit', compilation => {
            const found = {};
            Object.keys(compilation.assets).forEach(function (basename) {
                const source = compilation.assets[basename].source();
                for (var i = 0; i < this.strings.length; i++) {
                    log('searching for %s in %s', this.strings[i], basename);
                    if (source.indexOf(this.strings[i]) !== -1) {
                        found[this.strings[i]] = true;
                    }
                }
            });

            fs.writeFileSync(this.file, JSON.stringify(Object.keys(found), null, 4));
        });
    }
}
