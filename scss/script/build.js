const fs = require('fs');

const path = require('path');

const Sass = require('node-sass');

Sass.renderSync({
    data: fs.readFileSync(path.resolve(__dirname, '../src/global.scss'), 'utf8').toString(),
    outputStyle: 'expanded',
    outFile: path.resolve(__dirname, '../dist/global.css'),
    includePaths: [path.resolve(__dirname, '../src')]
});