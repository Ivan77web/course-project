const fs = require('fs');
const path = require('path');

const pathToCache = path.resolve(__dirname, '..', 'node_modules', '.cache');

fs.rm(pathToCache, { recursive: true }, (err) => {
    console.error(err);
});
