var exec = require('child_process').exec;

const start = (req, res, next) => {
    console.log("####################################################")
    console.log("################### planting ... ###################")
    console.log("####################################################")

    exec("ls", function (error, stdout, stderr) {
        if (error !== null) { return console.log('exec error: ' + error); }

        console.log('******* command ******\n' + stdout);
    });

    next()
}

module.exports = { start };