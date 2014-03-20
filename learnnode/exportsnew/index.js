var Ca = require('./a');

Ca.aaa();
Ca.bbb();
//
//console.log(Va.a);

//var Vb = require('./b');
//Vb();
//Vb();
//Vb();
//Vb();

function echoV(a)
{
    a = 2*a;
    console.log(a);
}

var Vb = require('./c');
Vb.ccc(echoV);
Vb.ccc(echoV);
Vb.ccc(echoV);

