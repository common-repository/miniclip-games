var mcg_game_list=new Array;!function($){$(window).load(function(){function e(e){var t=$('<div class="mc-game-popup"></div>');console.log(mcg_game_list[e]),$("body").append(t),t.html(n(mcg_game_list[e]));var a=$('<a href="" class="mc-close-button">x</a>');a.on("click",function(e){return e.preventDefault(),$(this).parent().remove(),!1}),t.append(a),t.on("click",function(e){return e.preventDefault(),e.stopPropagation(),$(this).remove(),!1}),t.show(),build_miniclip_game()}function n(e){var n=document.createElement("textarea");return n.innerHTML=e,n.value}$(".mc-game-play").on("click",function(n){n.preventDefault();var t=$(this).data("target");return e(t),!1}),$(".mc-game-popup").each(function(){})})}(jQuery);