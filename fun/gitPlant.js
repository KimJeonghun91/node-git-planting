var fs = require('fs');
var exec = require('child_process').exec;


const start = (req, res, next) => {
    console.log("####################################################")
    console.log("################### planting ... ###################")
    console.log("####################################################")

    fs.appendFile('./views/index.jade', `\n  span 🌱`, function (err) {
        if (err) { return console.log('appendFile error: ' + err); }
        console.log('The "data to append" was appended to file!');
    });


    exec("ls", function (error, stdout, stderr) {
        if (error !== null) { return console.log('exec error: ' + error); }

        console.log('******* command ******\n' + stdout);
    });

    next()
}

module.exports = { start };