// ロード画面グリッド
function grid(){
    $(".g1").animate({'background-color':'#ffffff'},1500);
    $(".g2").animate({'background-color':'#ffffff'},900);
    $(".g3").animate({'background-color':'#ffffff'},1200);
    $(".g4").animate({'background-color':'#ffffff'},700);
    $(".g5").animate({'background-color':'#ffffff'},1600);
    $(".g6").animate({'background-color':'#ffffff'},400);
    $(".g7").animate({'background-color':'#ffffff'},800);
    $(".g8").animate({'background-color':'#ffffff'},1100);
    $(".g9").animate({'background-color':'#ffffff'},500);
    $(".g10").animate({'background-color':'#ffffff'},1000);
    $(".grid").fadeOut(2500);
};
setTimeout(grid,1000);

// ヘッダースライド
function slide(){
    $(".front-layer").animate({'left': '0%'},900);
    $(".back-layer").animate({'right': '0%'},500);
    $(".header-menu").animate({'top': "0%"},1300);
    $(".header-title").css("display","none").fadeIn(1700);
};
setTimeout(slide, 3500);

// スクロールライン
function line(){
    winW = $('.scroll-navi').width();
    spped = 4000;
    count = 0;
    $('.line').animate({width: winW}, spped);
    $('.line').animate({width: 0},0);
    count++;
    if(count <= 30){
        setTimeout(line, 3000);}
    else {
        clearTimeout();
    }
}
line();

// ボーダーの線が動く
$(window).on('scroll', function (){
      var moveOffset = $('.moving-border').offset().top;
      var scrollPos = $(window).scrollTop();
      var wh = $(window).height();
  
      if(scrollPos > moveOffset - wh + (wh / 2) ){
        $('.moving-border').addClass('sphover');
        $('.moving-border .container').addClass('sphover');
        console.log("clear")
      }else{
        $('.moving-border').removeClass('sphover');
        $('.moving-border .container').removeClass('sphover');
        console.log("clear2")
        }
});  


// フェードイン
$(function(){
    $(window).scroll(function (){
        $('.effect-fade').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight){
                $(this).addClass('effect-scroll');
            }
        });
     });
});
    
// ハンバーガーメニュー
$(function() {
    $('.drawer').drawer();
});

// モーダル
$('.modal').modaal({
    type: 'inline',	// コンテンツのタイプを指定
    animation_speed: '500', 	// アニメーションのスピードをミリ秒単位で指定
	background: '#000000',	// 背景の色を白に変更
	overlay_opacity: '0.7',	// 背景のオーバーレイの透明度を変更
	fullscreen: 'true',	// フルスクリーンモードにする
	background_scroll: 'true',	// 背景をスクロールさせるか否か
	loading_content: 'Now Loading, Please Wait.'	// 読み込み時のテキスト表示
});