var Rocker = require('test'); 
var r = new Rocker.age('Ozzy', 62); 
r.about(); // Ozzy is 62 years old 
console.log(Rocker);
var r1 = new Rocker.height('Ozzy', 162); 
r1.about(); // Ozzy is 62 years old 

var Siyuan = require('siyuansys');

var aaa = new Siyuan.siyuan();
var bbb = new aaa.models();

bbb.message.find().limit(4).order('-id').all(function (err, messages) {
       if (err) return next(err);
 
       var items = messages.map(function (m) {
         return m.serialize();
       });
 
    console.log(items);
     });
