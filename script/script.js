

function init() {
    // スクロールして何ピクセルでアニメーションさせるか

    var px_change = 200;
    var book_count = 5;
    var hide = 0.3;
    var delay = 4;


    // window.scroll(function() {
    //
    // });
    // スクロールのイベントハンドラを登録
    window.addEventListener('scroll', function(){
      var y = window.pageYOffset
      console.log(y);



      // 変化するポイントまでスクロールしたらクラスを追加
      if ( $(window).scrollTop() > px_change ) {
          $("header").addClass("header_change");
      // 変化するポイント以前であればクラスを削除
      } else if ( $("header").hasClass("header_change") ) {
          $("header").removeClass("header_change");
      }

    });
}
window.onload = init();
