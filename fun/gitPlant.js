const fs = require('fs');
const exec = require('child_process').exec;
const execSync = require('child_process').execSync;


const start = (req, res, next) => {
    console.log("####################################################")
    console.log("################### planting ... ###################")
    console.log("####################################################")

    fs.appendFile('./views/index.jade', `\n  span 🌱`, function (err) {
        if (err) { return console.log('appendFile error: ' + err); }

        // exec("ls", function (error, stdout, stderr) {
        //     if (error !== null) { return console.log('exec error: ' + error); }
        //     console.log('******* command ******\n' + stdout);
        // });
        let timestamp = new Date().getTime();

        execSync('git add .');
        execSync(`git commit -m "${timestamp}"`);
        execSync('git push origin master');

        next()
    });
}


const startSchedule = () => {
    console.log("####################################################")
    console.log("################### planting ... ###################")
    console.log("####################################################")

    fs.appendFile('./views/index.jade', `\n  span 🌱`, function (err) {
        if (err) { return console.log('appendFile error: ' + err); }

        // exec("ls", function (error, stdout, stderr) {
        //     if (error !== null) { return console.log('exec error: ' + error); }
        //     console.log('******* command ******\n' + stdout);
        // });
        let timestamp = new Date().getTime();

        try{
            execSync('git add .');
            execSync(`git commit -m "${timestamp}"`);
            execSync('git push origin master');

        }catch(err){
            console.log('execSync error: ' + err); 
        }
    });
}
module.exports = { start,startSchedule };