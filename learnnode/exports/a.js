var a = 3;
module.exports = function(){
    var a = 4;
    this.a = 5;
    console.log(this.a);
};

