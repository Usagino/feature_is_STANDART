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


$(window).scroll(function (){
	$(".contents_1").each(function(){
	  var position = $(this).offset().top; //ページの一番上から要素までの距離を取得
	  var scroll = $(window).scrollTop(); //スクロールの位置を取得
	  var windowHeight = $(window).height(); //ウインドウの高さを取得

	  if (scroll > position - windowHeight){ //スクロール位置が要素の位置を過ぎたとき
	    $(this).addClass('active'); //クラス「active」を与える

	  }
    else {
      $(this).removeClass('active');
      console.log("false");
    }
	});
});
