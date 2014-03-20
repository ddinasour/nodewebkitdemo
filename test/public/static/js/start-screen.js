(function($) {
    $.StartScreen = function(){
        var plugin = this;

        plugin.init = function(){
            setTilesAreaSize();
            addMouseWheel();
        };

        var setTilesAreaSize = function(){
            var groups = $(".tile-group");
            var tileAreaWidth = 160;
            $.each(groups, function(i, t){
                tileAreaWidth += $(t).outerWidth()+46;
            });
            $(".tile-area-dark").css({
                width: tileAreaWidth
            });
        };

        var addMouseWheel = function (){
            $("body").mousewheel(function(event, delta){
                var scroll_value = delta * 50;
                $(document).scrollLeft($(document).scrollLeft() - scroll_value);
                return false;
            });
        };

        plugin.init();
    }
})(jQuery);

$(function(){
    var gui = require('nw.gui'); //or global.window.nwDispatcher.requireNwGui() (see https://github.com/rogerwang/node-webkit/issues/707)

    // Get the current window
    var win = gui.Window.get();

    // Listen to the minimize event
    win.on('minimize', function() {
      console.log('Window is minimized');
    });
    $.StartScreen();

    $("#close-window-button").click(function(){
        console.log("colse");
        win.close();
    });

    $("#mini-window-button").click(function(){
        console.log("minus");
        win.minimize();
    });

    $("#full-window-button").click(function(){
        console.log("full");
        var classname = $("#full-window-button").attr("class");
        if(classname == "icon-fullscreen-alt")
        {
            $("#full-window-button").attr("class","icon-fullscreen-exit-alt");
            //win.maximize();
            win.enterFullscreen();
        }else
        {
            $("#full-window-button").attr("class","icon-fullscreen-alt");
            win.leaveFullscreen();
        }
    });
});
