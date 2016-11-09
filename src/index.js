import debug from 'debug';
import fs from 'fs';

const log = debug('StringsWebpackPlugin');

export default class StringsWebpackPlugin {
    constructor(options) {
        this.strings = options.strings;
        this.file = options.file;
    }
    apply(compiler) {
        compiler.plugin('after-emit', (compilation, cb) => {
            const found = {};
            Object.keys(compilation.assets).forEach(basename => {
                const source = compilation.assets[basename].source();
                for (var i = 0; i < this.strings.length; i++) {
                    if (source.indexOf(this.strings[i]) !== -1) {
                        log(`string "${this.strings[i]}" found in ${basename}`);
                        found[this.strings[i]] = true;
                    }
                }
            });
            log(`writing strings ${JSON.stringify(Object.keys(found), null, 4)} to ${this.file}`);
            fs.writeFile(this.file, JSON.stringify(Object.keys(found), null, 4), cb);
        });
    }
}
