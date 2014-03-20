var a = 3;
module.exports.ccc = function(cb){
    a = a+1;
    console.log(a);
    return cb(a);
};

