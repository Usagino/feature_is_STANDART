// $(function(){
//   var target = ".contents_1";
//   var seperated =".headerwrap"
//   var obj_t_pos = $(target).offset().top;
//
//    $(window).scroll(function(){ // スクロール毎にイベントが発火します。
//       var scr_count = jQuery(document).scrollTop();
//       if (scr_count  > obj_t_pos) {
//         $(".navigation a").css("color","black");
//
//         $("header").css({
//           "background-color":"white",
//           "box-shadow": "0px 4px 10px 0px rgba(166,166,166,1)"
//         });
//       }else {
//         $(".navigation a").css("color","white");
//
//         $("header").css({
//           "background-color":"transparent",
//           "box-shadow":"none"
//         });
//       }
//    })
// })


function init() {
    // スクロールして何ピクセルでアニメーションさせるか
    var px_change   = 300;

    // スクロールのイベントハンドラを登録
    window.addEventListener('scroll', function(e){
        // 変化するポイントまでスクロールしたらクラスを追加
        if ( $(window).scrollTop() > px_change ) {
            $("header").addClass("header_change");
            console.log("up");

        // 変化するポイント以前であればクラスを削除
        } else if ( $("header").hasClass("header_change") ) {
            $("header").removeClass("header_change");
            console.log("down");
        }
    });
}
window.onload = init();
