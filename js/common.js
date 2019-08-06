function grid(){
    $(".g1").animate({'background-color':'#ffffff'},1500);
    $(".g2").animate({'background-color':'#ffffff'},900);
    $(".g3").animate({'background-color':'#ffffff'},1200);
    $(".g4").animate({'background-color':'#ffffff'},700);
    $(".g5").animate({'background-color':'#ffffff'},1600);
    $(".g6").animate({'background-color':'#ffffff'},1400);
    $(".g7").animate({'background-color':'#ffffff'},800);
    $(".g8").animate({'background-color':'#ffffff'},140);
    $(".g9").animate({'background-color':'#ffffff'},1200);
    $(".g10").animate({'background-color':'#ffffff'},1000);
    $(".grid").fadeOut(2500);
};
setTimeout(grid,1000);


function slide(){
    $(".front-layer").animate({'left': '0%'},1500);
    $(".back-layer").animate({'right': '0%'},1000);
    $(".header-menu").animate({'top': "0%"},2000);
    $(".header-title").css("display","none").fadeIn(2500);
};
setTimeout(slide, 3500);


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


// エフェクト1
(function() {
    setTimeout(init, 10);
        function init() {
            var scrollElemToWatch_1 = document.getElementById('effect_01'),
                    watcher_1 = scrollMonitor.create(scrollElemToWatch_1, -10),				
                    rev1 = new RevealFx(scrollElemToWatch_1, {
                        revealSettings : {
                            bgcolor: '#182524',
                            duration: 300,
                            onStart: function(contentEl, revealerEl) { 
                                anime.remove(contentEl);
                                contentEl.style.opacity = 0; 
                            },
                            onCover: function(contentEl, revealerEl) { 
                                contentEl.style.opacity = 1;
                                anime({
                                    targets: contentEl,
                                    easing: 'easeOutExpo'
                                });
                            }
                        }
                    })
            watcher_1.enterViewport(function() {
                rev1.reveal();
                watcher_1.destroy();
            });
        }
    })();
// エフェクト2
(function() {
    setTimeout(init, 10);
        function init() {
            var scrollElemToWatch_2 = document.getElementById('effect_02'),
                    watcher_2 = scrollMonitor.create(scrollElemToWatch_2, -10),				
                    rev2 = new RevealFx(scrollElemToWatch_2, {
                        revealSettings : {
                            bgcolor: '#182524',
                            duration: 300,
                            onStart: function(contentEl, revealerEl) { 
                                anime.remove(contentEl);
                                contentEl.style.opacity = 0; 
                            },
                            onCover: function(contentEl, revealerEl) { 
                                contentEl.style.opacity = 1;
                                anime({
                                    targets: contentEl,
                                    easing: 'easeOutExpo'
                                });
                            }
                        }
                    })               
                    watcher_2.enterViewport(function() {
                rev2.reveal();
                watcher_2.destroy();
            });
        }
    })();
// エフェクト3
(function() {
    setTimeout(init, 10);
        function init() {
            var scrollElemToWatch_3 = document.getElementById('effect_03'),
                    watcher_3 = scrollMonitor.create(scrollElemToWatch_3, -10),				
                    rev3 = new RevealFx(scrollElemToWatch_3, {
                        revealSettings : {
                            bgcolor: '#182524',
                            duration: 300,
                            onStart: function(contentEl, revealerEl) { 
                                anime.remove(contentEl);
                                contentEl.style.opacity = 0; 
                            },
                            onCover: function(contentEl, revealerEl) { 
                                contentEl.style.opacity = 1;
                                anime({
                                    targets: contentEl,
                                    easing: 'easeOutExpo'
                                });
                            }
                        }
                    })               
                    watcher_3.enterViewport(function() {
                rev3.reveal();
                watcher_3.destroy();
            });
        }
    })();
// エフェクト4
(function() {
    setTimeout(init, 10);
        function init() {
            var scrollElemToWatch_4 = document.getElementById('effect_04'),
                    watcher_4 = scrollMonitor.create(scrollElemToWatch_4, -10),				
                    rev4 = new RevealFx(scrollElemToWatch_4, {
                        revealSettings : {
                            bgcolor: '#182524',
                            duration: 300,
                            onStart: function(contentEl, revealerEl) { 
                                anime.remove(contentEl);
                                contentEl.style.opacity = 0; 
                            },
                            onCover: function(contentEl, revealerEl) { 
                                contentEl.style.opacity = 1;
                                anime({
                                    targets: contentEl,
                                    easing: 'easeOutExpo'
                                });
                            }
                        }
                    })               
                    watcher_4.enterViewport(function() {
                rev4.reveal();
                watcher_4.destroy();
            });
        }
    })();
// エフェクト5
        (function() {
            setTimeout(init, 10);
                function init() {
                    var scrollElemToWatch_5 = document.getElementById('effect_05'),
                            watcher_5 = scrollMonitor.create(scrollElemToWatch_5, -10),				
                            rev5 = new RevealFx(scrollElemToWatch_5, {
                                revealSettings : {
                                    bgcolor: '#182524',
                                    duration: 300,
                                    onStart: function(contentEl, revealerEl) { 
                                        anime.remove(contentEl);
                                        contentEl.style.opacity = 0; 
                                    },
                                    onCover: function(contentEl, revealerEl) { 
                                        contentEl.style.opacity = 1;
                                        anime({
                                            targets: contentEl,
                                            easing: 'easeOutExpo'
                                        });
                                    }
                                }
                            })               
                            watcher_5.enterViewport(function() {
                        rev5.reveal();
                        watcher_5.destroy();
                    });
                }
            })();
// エフェクト6
(function() {
    setTimeout(init, 10);
        function init() {
            var scrollElemToWatch_6 = document.getElementById('effect_06'),
                    watcher_6 = scrollMonitor.create(scrollElemToWatch_6, -10),				
                    rev6 = new RevealFx(scrollElemToWatch_6, {
                        revealSettings : {
                            bgcolor: '#182524',
                            duration: 300,
                            onStart: function(contentEl, revealerEl) { 
                                anime.remove(contentEl);
                                contentEl.style.opacity = 0; 
                            },
                            onCover: function(contentEl, revealerEl) { 
                                contentEl.style.opacity = 1;
                                anime({
                                    targets: contentEl,
                                    easing: 'easeOutExpo'
                                });
                            }
                        }
                    })               
                    watcher_6.enterViewport(function() {
                rev6.reveal();
                watcher_6.destroy();
            });
        }
    })();
// var timeoutId;
// var revealElems = document.querySelectorAll('.revealItem');

// window.addEventListener("scroll", function () {
//     if(timeoutId) return;

//     timeoutId = this.setTimeout( function() {
//         timeoutId = 0;

//         for (const revealElem of revealElems)  {
//             const heightOfRevealElem = revealElem.clientHeight;
//             const revealPoint = (window.scrollY + window.innerHeight) - heightOfRevealElem / 2;
//             const halfShown = revealPoint > revealElem.offsetTop;
//             if (halfShown) {
//                 if (!revealElem.classList.contains('revealActive')) {
//                     revealElem.className += ' revealActive';
//                 }
//             }
//         };

//     }, 300);
// });

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