
var Siyuan = require('siyuansys');

global.Siyuan = Siyuan;
global.$ = $;
global.Mustache = Mustache;

console.log(Siyuan.controller);

var author = function () { console.log("author"); },
books = function () { console.log("books"); },
//tmp = function () { console.log("tmp");Siyuan.controller.message.create(Siyuan,$,Mustache); },
tmp = function () { console.log("tmp");Siyuan.controller.message.create(); },
viewBook = function(bookId) { console.log("viewBook: bookId is populated: " + bookId); };


//function controllers(){
//
//    this.message = function() {
//    console.log("message create");
//    console.log($("#message_title").val());
//    console.log($("#message_body").val());
//        Siyuan.siyuan(function(err,db){
//           db.models.message.create({
//            // title: "huang", 
//            //body: "chuanwen"
//            title: $("#message_title").val(), 
//            body: $("#message_body").val()
//           }, function (err, message) {
//             if (err) throw err;
//               //db.models.message.find().limit(10).order('-id').all(function (err, messages) {
//               //  if (err) return next(err);
//
//               //  var items = messages.map(function (m) {
//               //    return m.serialize();
//               //  });
//               // console.log(items);
//
//               //});
//                var fs = require('fs');
//                var file = fs.readFileSync("view/message/create.html", "utf8");
//                var date = new Date();
//                var view = {
//                    title: "Joe",
//                    timeaa :"?date:"+date
//                };
//
//                var output = Mustache.render(file, view);
//                $("#main_area").html(output);
//
//             db.close()
//             console.log("Done!");
//           });
//        });
//        
//    };
//
//}

var routes = {
'/author': author,
'/books': [books, function() { console.log("An inline route handler."); }],
'/books/view/:bookId': viewBook,
'/message/create(\\?date.*)?': tmp
};

var router = Router(routes);
router.init();


