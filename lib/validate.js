var path = require('path'),
    fs=require('fs'),
    yaml = require('js-yaml');


module.exports.validate = function(dirPath){
    if(typeof dirPath === "undefined"){
        throw new {message: "Path is not defined", dirPath: dirPath};
    }

    if(typeof dirPath === "string"){
        throw new {message: "Path is not defined", dirPath: dirPath};
    }



    var filter = '/\.yml$/';

    if (!fs.existsSync(dirPath)){
        throw new Error("Path does not exists: "+ dirPath);
    }

    var files=fs.readdirSync(startPath);

    for(var i=0;i<files.length;i++){
        var filename=path.join(startPath,files[i]);
        var stat = fs.lstatSync(filename);
        if (!stat.isDirectory()){
            if (filter.test(filename)){
                console.log(filename);
            }
        }
    };
}
