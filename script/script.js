$(function(){
  var target = ".contents_1";
  var seperated =".headerwrap"
  var obj_t_pos = $(target).offset().top;

   $(window).scroll(function(){ // スクロール毎にイベントが発火します。
      var scr_count = jQuery(document).scrollTop();

      if (scr_count  > obj_t_pos) {
        $(".navigation a").css("color","black");
        $("header").css({
          "background-color":"white",
          "box-shadow": "0px 4px 10px 0px rgba(166,166,166,1)"
        });
      }else {
        $(".navigation a").css("color","white");
        $("header").css({
          "background-color":"transparent",
          "box-shadow":"none"

        });

      }
   })
})
