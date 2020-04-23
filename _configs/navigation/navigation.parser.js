
const ejs = require('ejs');
const path = require('path');
const fs = require('fs');

ejs.renderFile(path.join(__dirname, './tmpl/screen.tmpl.ejs'), {}, {}, (err, str) => {
    const dir = path.join(__dirname, '../src/1.screens/test');
    fs.mkdir(dir, { recursive: true }, err => {
        fs.writeFile(path.join(dir, 'test.js'), str, err1 => {
            console.error(err1);
        });
    });
});
