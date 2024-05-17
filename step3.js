/* Read file at path */
const fs = require('fs');
const process = require('process');
const axios = require('axios');

/* Output to a file*/
function output(data, out){
    if(out){
        fs.writeFile(out, data, 'utf8', (err) => {
            if (err){
                console.error(`Couldn't write ${out}: ${err}`)
                process.exit(1);
            }
        });
    }else{
        console.log(data);
    }
}


function cat(path, out){
    fs.readFile(path, 'utf8', (err, data) => {
        if (err){
            console.error(`Error reading ${path}: ${err}`)
            process.exit(1)
        }
        else{
            output(data, out);
        }
    });
}


/* Read page at URL */
async function webCat(url, out){
    try{
        const resp = await axios.get(url);
        output(resp.data, out)
    }
    catch(err){
        console.error(`Error fetching ${url}: ${err}`)
        process.exit(1);
    }
}



/* Command-line args */
let path;
let out;
if (process.argv[2]=== '--out'){
    out = process.argv[3]
    path = process.argv[4]
}else{
    path = process.argv[2]
}
if (path.slice(0,4) === 'http'){
    webCat(path, out);
}else{
    cat(path, out);
}

