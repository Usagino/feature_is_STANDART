

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
