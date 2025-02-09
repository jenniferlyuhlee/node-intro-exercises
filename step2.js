/* Read file at path */
const fs = require('fs');
const process = require('process');

/* Read file at path */
function cat(path){
    fs.readFile(path, 'utf8', (err, data) => {
        if (err){
            console.error(`Error reading ${path}: ${err}`)
            process.exit(1)
        }
        console.log(data)
    });
}


/* Read page at URL */
const axios = require('axios');
async function webCat(url){
    try{
        const resp = await axios.get(url);
        console.log(resp.data)
    }
    catch(err){
        console.error(`Error fetching ${url}: ${err}`)
        process.exit(1);
    }
}


/* Command-line args */
let path = process.argv[2]
if (path.slice(0,4) === 'http'){
    webCat(path);
}else{
    cat(path);
}

