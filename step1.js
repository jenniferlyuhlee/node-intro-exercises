const fs = require('fs');
const process = require('process');

/* Read file at path */
function cat(path){
    fs.readFile(path, 'utf8', (err, data) => {
        if (err){
            console.log(`Error reading ${path}: ${err}`)
            process.exit(1)
        }
        console.log(data)
    });
}

cat(process.argv[2]);
