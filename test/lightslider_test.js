(function($) {


	var options = {
            width: 474,
            gallery:true,
            galleryNav: true,
            item:1,
            thumbItem:5,
            slideMargin: 0,
            loop: true,
            onSliderLoad: function() {
                $('#image-gallery').removeClass('cS-hidden');
            } 
    	};


    module('Main image navigation, horizontal, looping');
  
        asyncTest("One next click", function() {

            $("#image-gallery").lightSlider(options);
            var lSAction = $('.lSSlideOuter .lSPagerWrapper > .lSAction'),
                mainPager = $('.lSSlideWrapper > .lSAction');

            mainPager.children('.lSNext').trigger('click');

            start();
            equal(lSAction.find('a.lSPrev').css('display'), 'none', 'Prev = none'); 
            equal(lSAction.find('a.lSNext').css('display'), 'block', 'Next = block'); 
        });

        asyncTest("One Prev click", function() {

            $("#image-gallery").lightSlider(options);
            var lSAction = $('.lSSlideOuter .lSPagerWrapper > .lSAction'),
                mainPager = $('.lSSlideWrapper > .lSAction');

            mainPager.children('.lSPrev').trigger('click');

            start();
            equal(lSAction.find('a.lSPrev').css('display'), 'block', 'Prev = block'); 
            equal(lSAction.find('a.lSNext').css('display'), 'none', 'Next = none'); 
        });


        asyncTest("One next click and one previous", function() {

            $("#image-gallery").lightSlider(options);
            var lSAction = $('.lSSlideOuter .lSPagerWrapper > .lSAction'),
                mainPager = $('.lSSlideWrapper > .lSAction');

            mainPager.children('.lSNext').trigger('click');
            mainPager.children('.lSNext').trigger('click');
            mainPager.children('.lSPrev').trigger('click');

            start();
            equal(lSAction.find('a.lSPrev').css('display'), 'none', 'Prev = none'); 
            equal(lSAction.find('a.lSNext').css('display'), 'block', 'Next = block'); 
        });

        asyncTest("Click next button until prev appears and next button disappears", function() {

            $("#image-gallery").lightSlider(options);
            var lSAction = $('.lSSlideOuter .lSPagerWrapper > .lSAction'),
                mainPager = $('.lSSlideWrapper > .lSAction');

            for (var i = 0; i < 3; i++) {
                mainPager.children('.lSNext').trigger('click');
            }

            start();
            equal(lSAction.find('a.lSPrev').css('display'), 'block', 'Prev = block'); 
            equal(lSAction.find('a.lSNext').css('display'), 'none', 'Next = none'); 

        });

        asyncTest("Click next button until prev appears and next button disappears and then click prev to reverse changes", function() {

            $("#image-gallery").lightSlider(options);
            var lSAction = $('.lSSlideOuter .lSPagerWrapper > .lSAction'),
                mainPager = $('.lSSlideWrapper > .lSAction');

            for (var i = 0; i < 3; i++) {
                mainPager.children('.lSNext').trigger('click');
            }
            mainPager.children('.lSPrev').trigger('click');

            start();
            equal(lSAction.find('a.lSPrev').css('display'), 'none', 'Prev = none'); 
            equal(lSAction.find('a.lSNext').css('display'), 'block', 'Next = block');

        });


        asyncTest("Click next until the end is reached and looping envoked", function() {

            $("#image-gallery").lightSlider(options);
            var lSAction = $('.lSSlideOuter .lSPagerWrapper > .lSAction'),
                mainPager = $('.lSSlideWrapper > .lSAction');

            for (var i = 0; i < 6; i++) {
                mainPager.children('.lSNext').trigger('click');
            }

            start();
            equal(lSAction.find('a.lSPrev').css('display'), 'none', 'Prev = none'); 
            equal(lSAction.find('a.lSNext').css('display'), 'block', 'Next = block');

        });

        asyncTest("Click next until the end is reached and looping envoked and click prev to go back to final image", function() {

            $("#image-gallery").lightSlider(options);
            var lSAction = $('.lSSlideOuter .lSPagerWrapper > .lSAction'),
                mainPager = $('.lSSlideWrapper > .lSAction');

            for (var i = 0; i < 6; i++) {
                mainPager.children('.lSNext').trigger('click');
            }
            mainPager.children('.lSPrev').trigger('click');

            start();
            equal(lSAction.find('a.lSPrev').css('display'), 'block', 'Prev = block'); 
            equal(lSAction.find('a.lSNext').css('display'), 'none', 'Next = none');

        });


    module('Main image navigation, horizontal, non-looping');
  
        asyncTest("One next click", function() {
            options.loop = false;

            $("#image-gallery").lightSlider(options);
            var lSAction = $('.lSSlideOuter .lSPagerWrapper > .lSAction'),
                mainPager = $('.lSSlideWrapper > .lSAction');

            mainPager.children('.lSNext').trigger('click');

            start();
            equal(lSAction.find('a.lSPrev').css('display'), 'none', 'Prev = none'); 
            equal(lSAction.find('a.lSNext').css('display'), 'block', 'Next = block'); 
        });

        asyncTest("One next click and one previous", function() {
            options.loop = false;

            $("#image-gallery").lightSlider(options);
            var lSAction = $('.lSSlideOuter .lSPagerWrapper > .lSAction'),
                mainPager = $('.lSSlideWrapper > .lSAction');

            mainPager.children('.lSNext').trigger('click');
            mainPager.children('.lSNext').trigger('click');
            mainPager.children('.lSPrev').trigger('click');

            start();
            equal(lSAction.find('a.lSPrev').css('display'), 'none', 'Prev = none'); 
            equal(lSAction.find('a.lSNext').css('display'), 'block', 'Next = block'); 
        });

        asyncTest("Click next button until prev appears and next button disappears", function() {
            options.loop = false;

            $("#image-gallery").lightSlider(options);
            var lSAction = $('.lSSlideOuter .lSPagerWrapper > .lSAction'),
                mainPager = $('.lSSlideWrapper > .lSAction');

            for (var i = 0; i < 3; i++) {
                mainPager.children('.lSNext').trigger('click');
            }

            start();
            equal(lSAction.find('a.lSPrev').css('display'), 'block', 'Prev = block'); 
            equal(lSAction.find('a.lSNext').css('display'), 'none', 'Next = none'); 

        });

        asyncTest("Click next button until prev appears and next button disappears and then click prev to reverse changes", function() {

            $("#image-gallery").lightSlider(options);
            var lSAction = $('.lSSlideOuter .lSPagerWrapper > .lSAction'),
                mainPager = $('.lSSlideWrapper > .lSAction');

            for (var i = 0; i < 3; i++) {
                mainPager.children('.lSNext').trigger('click');
            }
            mainPager.children('.lSPrev').trigger('click');

            start();
            equal(lSAction.find('a.lSPrev').css('display'), 'none', 'Prev = none'); 
            equal(lSAction.find('a.lSNext').css('display'), 'block', 'Next = block');

        });


    module('Main image navigation, vertical, looping');
  
        asyncTest("One next click", function() {
            options.vertical = true;
            options.loop = true;


            $("#image-gallery").lightSlider(options);
            var lSAction = $('.lSSlideOuter .lSPagerWrapper > .lSAction'),
                mainPager = $('.lSSlideWrapper > .lSAction');

            mainPager.children('.lSNext').trigger('click');

            start();
            equal(lSAction.find('a.lSPrev').css('display'), 'none', 'Prev = none'); 
            equal(lSAction.find('a.lSNext').css('display'), 'block', 'Next = block'); 
        });

        asyncTest("One Prev click", function() {
            options.vertical = true;

            $("#image-gallery").lightSlider(options);
            var lSAction = $('.lSSlideOuter .lSPagerWrapper > .lSAction'),
                mainPager = $('.lSSlideWrapper > .lSAction');

            mainPager.children('.lSPrev').trigger('click');

            start();
            equal(lSAction.find('a.lSPrev').css('display'), 'block', 'Prev = block'); 
            equal(lSAction.find('a.lSNext').css('display'), 'none', 'Next = none'); 
        });


        asyncTest("One next click and one previous", function() {

            $("#image-gallery").lightSlider(options);
            var lSAction = $('.lSSlideOuter .lSPagerWrapper > .lSAction'),
                mainPager = $('.lSSlideWrapper > .lSAction');

            mainPager.children('.lSNext').trigger('click');
            mainPager.children('.lSNext').trigger('click');
            mainPager.children('.lSPrev').trigger('click');

            start();
            equal(lSAction.find('a.lSPrev').css('display'), 'none', 'Prev = none'); 
            equal(lSAction.find('a.lSNext').css('display'), 'block', 'Next = block'); 
        });

        asyncTest("Click next button until prev appears and next button disappears", function() {

            $("#image-gallery").lightSlider(options);
            var lSAction = $('.lSSlideOuter .lSPagerWrapper > .lSAction'),
                mainPager = $('.lSSlideWrapper > .lSAction');

            for (var i = 0; i < 3; i++) {
                mainPager.children('.lSNext').trigger('click');
            }

            start();
            equal(lSAction.find('a.lSPrev').css('display'), 'block', 'Prev = block'); 
            equal(lSAction.find('a.lSNext').css('display'), 'none', 'Next = none'); 

        });

        asyncTest("Click next button until prev appears and next button disappears and then click prev to reverse changes", function() {

            $("#image-gallery").lightSlider(options);
            var lSAction = $('.lSSlideOuter .lSPagerWrapper > .lSAction'),
                mainPager = $('.lSSlideWrapper > .lSAction');

            for (var i = 0; i < 3; i++) {
                mainPager.children('.lSNext').trigger('click');
            }
            mainPager.children('.lSPrev').trigger('click');

            start();
            equal(lSAction.find('a.lSPrev').css('display'), 'none', 'Prev = none'); 
            equal(lSAction.find('a.lSNext').css('display'), 'block', 'Next = block');

        });


        asyncTest("Click next until the end is reached and looping envoked", function() {

            $("#image-gallery").lightSlider(options);
            var lSAction = $('.lSSlideOuter .lSPagerWrapper > .lSAction'),
                mainPager = $('.lSSlideWrapper > .lSAction');

            for (var i = 0; i < 6; i++) {
                mainPager.children('.lSNext').trigger('click');
            }

            start();
            equal(lSAction.find('a.lSPrev').css('display'), 'none', 'Prev = none'); 
            equal(lSAction.find('a.lSNext').css('display'), 'block', 'Next = block');

        });

        asyncTest("Click next until the end is reached and looping envoked and click prev to go back to final image", function() {

            $("#image-gallery").lightSlider(options);
            var lSAction = $('.lSSlideOuter .lSPagerWrapper > .lSAction'),
                mainPager = $('.lSSlideWrapper > .lSAction');

            for (var i = 0; i < 6; i++) {
                mainPager.children('.lSNext').trigger('click');
            }
            mainPager.children('.lSPrev').trigger('click');

            start();
            equal(lSAction.find('a.lSPrev').css('display'), 'block', 'Prev = block'); 
            equal(lSAction.find('a.lSNext').css('display'), 'none', 'Next = none');

        });

   module('Main image navigation, vertical, non-looping');
  
        asyncTest("One next click", function() {
            options.loop = false;
            options.rtl = false;

            $("#image-gallery").lightSlider(options);
            var lSAction = $('.lSSlideOuter .lSPagerWrapper > .lSAction'),
                mainPager = $('.lSSlideWrapper > .lSAction');

            mainPager.children('.lSNext').trigger('click');

            start();
            equal(lSAction.find('a.lSPrev').css('display'), 'none', 'Prev = none'); 
            equal(lSAction.find('a.lSNext').css('display'), 'block', 'Next = block'); 
        });

        asyncTest("One next click and one previous", function() {

            $("#image-gallery").lightSlider(options);
            var lSAction = $('.lSSlideOuter .lSPagerWrapper > .lSAction'),
                mainPager = $('.lSSlideWrapper > .lSAction');

            mainPager.children('.lSNext').trigger('click');
            mainPager.children('.lSNext').trigger('click');
            mainPager.children('.lSPrev').trigger('click');

            start();
            equal(lSAction.find('a.lSPrev').css('display'), 'none', 'Prev = none'); 
            equal(lSAction.find('a.lSNext').css('display'), 'block', 'Next = block'); 
        });

        asyncTest("Click next button until prev appears and next button disappears", function() {

            $("#image-gallery").lightSlider(options);
            var lSAction = $('.lSSlideOuter .lSPagerWrapper > .lSAction'),
                mainPager = $('.lSSlideWrapper > .lSAction');

            for (var i = 0; i < 3; i++) {
                mainPager.children('.lSNext').trigger('click');
            }

            start();
            equal(lSAction.find('a.lSPrev').css('display'), 'block', 'Prev = block'); 
            equal(lSAction.find('a.lSNext').css('display'), 'none', 'Next = none'); 

        });

        asyncTest("Click next button until prev appears and next button disappears and then click prev to reverse changes", function() {

            $("#image-gallery").lightSlider(options);
            var lSAction = $('.lSSlideOuter .lSPagerWrapper > .lSAction'),
                mainPager = $('.lSSlideWrapper > .lSAction');

            for (var i = 0; i < 3; i++) {
                mainPager.children('.lSNext').trigger('click');
            }
            mainPager.children('.lSPrev').trigger('click');

            start();
            equal(lSAction.find('a.lSPrev').css('display'), 'none', 'Prev = none'); 
            equal(lSAction.find('a.lSNext').css('display'), 'block', 'Next = block');

        });


    module('Gallery pager button movement tests,  horizontal');

        asyncTest("One next click", function() {

            options.vertical = false;

            $("#image-gallery").lightSlider(options);
            var lSAction = $('.lSSlideOuter .lSPagerWrapper > .lSAction');

            lSAction.children('.lSNext').trigger('click');

            setTimeout(function() {
                start();
                equal(lSAction.children('.lSPrev').css('display'), 'block', 'Prev = block'); 
                equal(lSAction.children('.lSNext').css('display'), 'none', 'Next = none'); 
            }, 500);
        });


        asyncTest("One next click followed by one previous click", function() {

            $("#image-gallery").lightSlider(options);
            var lSAction = $('.lSSlideOuter .lSPagerWrapper > .lSAction');

            setTimeout(function() {
                lSAction.children('.lSNext').trigger('click');
            }, 300);

            setTimeout(function() {
                lSAction.children('.lSPrev').trigger('click');
            }, 900);

            setTimeout(function() {
                equal(lSAction.children('a.lSPrev').css('display'), 'none', 'Prev = none'); 
                equal(lSAction.children('a.lSNext').css('display'), 'block', 'Next = block'); 
                start();
            }, 1600);

        });


        asyncTest("Two next clicks (to the end)", function() {

            options.thumbItem = 4;

            $("#image-gallery").lightSlider(options);
            var lSAction = $('.lSSlideOuter .lSPagerWrapper > .lSAction');

            setTimeout(function() {
                lSAction.children('.lSNext').trigger('click');
            }, 300);

            setTimeout(function() {
                lSAction.children('.lSNext').trigger('click');
            }, 1000);

            setTimeout(function() {
                equal(lSAction.children('a.lSPrev').css('display'), 'block', 'Prev = block'); 
                equal(lSAction.children('a.lSNext').css('display'), 'none', 'Next = none'); 
                start();
            }, 1400);
        });


        asyncTest("Two next clicks (to the end) and one previous to display both nav buttons", function() {

            $("#image-gallery").lightSlider(options);
            var lSAction = $('.lSSlideOuter .lSPagerWrapper > .lSAction');

            setTimeout(function() {
                lSAction.children('.lSNext').trigger('click');
            }, 300);

            setTimeout(function() {
                lSAction.children('.lSNext').trigger('click');
            }, 800);

            setTimeout(function() {
                lSAction.children('.lSPrev').trigger('click');
            }, 1400);

            setTimeout(function() {
                equal(lSAction.children('a.lSPrev').css('display'), 'block', 'Prev = block'); 
                equal(lSAction.children('a.lSNext').css('display'), 'block', 'Next = block'); 
                start();
            }, 2000);
        });


        asyncTest("Two next clicks (to the end) and two previous to display the next button only", function() {

            $("#image-gallery").lightSlider(options);
            var lSAction = $('.lSSlideOuter .lSPagerWrapper > .lSAction');

            setTimeout(function() {
                lSAction.children('.lSNext').trigger('click');
            }, 300);

            setTimeout(function() {
                lSAction.children('.lSNext').trigger('click');
            }, 800);

            setTimeout(function() {
                lSAction.children('.lSPrev').trigger('click');
            }, 1400);

            setTimeout(function() {
                lSAction.children('.lSPrev').trigger('click');
            }, 2000);

            setTimeout(function() {
                equal(lSAction.children('a.lSPrev').css('display'), 'none', 'Prev = none'); 
                equal(lSAction.children('a.lSNext').css('display'), 'block', 'Next = block'); 
                start();
            }, 2400);
        });

    module('Gallery pager button movement tests,  vertical');

        asyncTest("One next click", function() {

            options.vertical = true;
            options.thumbItem = 5;

            $("#image-gallery").lightSlider(options);
            var lSAction = $('.lSSlideOuter .lSPagerWrapper > .lSAction');

            lSAction.children('.lSNext').trigger('click');

            setTimeout(function() {
                start();
                equal(lSAction.children('.lSPrev').css('display'), 'block', 'Prev = block'); 
                equal(lSAction.children('.lSNext').css('display'), 'none', 'Next = none'); 
            }, 500);
        });


        asyncTest("One next click followed by one previous click", function() {

            $("#image-gallery").lightSlider(options);
            var lSAction = $('.lSSlideOuter .lSPagerWrapper > .lSAction');

            setTimeout(function() {
                lSAction.children('.lSNext').trigger('click');
            }, 300);

            setTimeout(function() {
                lSAction.children('.lSPrev').trigger('click');
            }, 900);

            setTimeout(function() {
                equal(lSAction.children('a.lSPrev').css('display'), 'none', 'Prev = none'); 
                equal(lSAction.children('a.lSNext').css('display'), 'block', 'Next = block'); 
                start();
            }, 1600);

        });


        asyncTest("Two next clicks (to the end)", function() {

            options.thumbItem = 4;

            $("#image-gallery").lightSlider(options);
            var lSAction = $('.lSSlideOuter .lSPagerWrapper > .lSAction');

            setTimeout(function() {
                lSAction.children('.lSNext').trigger('click');
            }, 300);

            setTimeout(function() {
                lSAction.children('.lSNext').trigger('click');
            }, 1000);

            setTimeout(function() {
                equal(lSAction.children('a.lSPrev').css('display'), 'block', 'Prev = block'); 
                equal(lSAction.children('a.lSNext').css('display'), 'none', 'Next = none'); 
                start();
            }, 1400);
        });


        asyncTest("Two next clicks (to the end) and one previous to display both nav buttons", function() {

            $("#image-gallery").lightSlider(options);
            var lSAction = $('.lSSlideOuter .lSPagerWrapper > .lSAction');

            setTimeout(function() {
                lSAction.children('.lSNext').trigger('click');
            }, 300);

            setTimeout(function() {
                lSAction.children('.lSNext').trigger('click');
            }, 800);

            setTimeout(function() {
                lSAction.children('.lSPrev').trigger('click');
            }, 1400);

            setTimeout(function() {
                equal(lSAction.children('a.lSPrev').css('display'), 'block', 'Prev = block'); 
                equal(lSAction.children('a.lSNext').css('display'), 'block', 'Next = block'); 
                start();
            }, 2000);
        });


        asyncTest("Two next clicks (to the end) and two previous to display the next button only", function() {

            $("#image-gallery").lightSlider(options);
            var lSAction = $('.lSSlideOuter .lSPagerWrapper > .lSAction');

            setTimeout(function() {
                lSAction.children('.lSNext').trigger('click');
            }, 300);

            setTimeout(function() {
                lSAction.children('.lSNext').trigger('click');
            }, 800);

            setTimeout(function() {
                lSAction.children('.lSPrev').trigger('click');
            }, 1400);

            setTimeout(function() {
                lSAction.children('.lSPrev').trigger('click');
            }, 2000);

            setTimeout(function() {
                equal(lSAction.children('a.lSPrev').css('display'), 'none', 'Prev = none'); 
                equal(lSAction.children('a.lSNext').css('display'), 'block', 'Next = block'); 
                start();
            }, 2400);
        });

    module('Gallery pager button movement tests,  horizontal, looping');

        asyncTest("One next click", function() {

            options.vertical = false;
            options.loop = true;
            options.thumbItem = 5;


            $("#image-gallery").lightSlider(options);
            var lSAction = $('.lSSlideOuter .lSPagerWrapper > .lSAction');

            lSAction.children('.lSNext').trigger('click');

            setTimeout(function() {
                start();
                equal(lSAction.children('.lSPrev').css('display'), 'block', 'Prev = block'); 
                equal(lSAction.children('.lSNext').css('display'), 'none', 'Next = none'); 
            }, 500);
        });


        asyncTest("One next click followed by one previous click", function() {

            $("#image-gallery").lightSlider(options);
            var lSAction = $('.lSSlideOuter .lSPagerWrapper > .lSAction');

            setTimeout(function() {
                lSAction.children('.lSNext').trigger('click');
            }, 300);

            setTimeout(function() {
                lSAction.children('.lSPrev').trigger('click');
            }, 900);

            setTimeout(function() {
                equal(lSAction.children('a.lSPrev').css('display'), 'none', 'Prev = none'); 
                equal(lSAction.children('a.lSNext').css('display'), 'block', 'Next = block'); 
                start();
            }, 1600);

        });

        asyncTest("Two next clicks (to the end)", function() {

            options.thumbItem = 4;

            $("#image-gallery").lightSlider(options);
            var lSAction = $('.lSSlideOuter .lSPagerWrapper > .lSAction');

            setTimeout(function() {
                lSAction.children('.lSNext').trigger('click');
            }, 300);

            setTimeout(function() {
                lSAction.children('.lSNext').trigger('click');
            }, 1000);

            setTimeout(function() {
                equal(lSAction.children('a.lSPrev').css('display'), 'block', 'Prev = block'); 
                equal(lSAction.children('a.lSNext').css('display'), 'none', 'Next = none'); 
                start();
            }, 1400);
        });

        asyncTest("Two next clicks (to the end) and one previous to display both nav buttons", function() {

            $("#image-gallery").lightSlider(options);
            var lSAction = $('.lSSlideOuter .lSPagerWrapper > .lSAction');

            setTimeout(function() {
                lSAction.children('.lSNext').trigger('click');
            }, 300);

            setTimeout(function() {
                lSAction.children('.lSNext').trigger('click');
            }, 800);

            setTimeout(function() {
                lSAction.children('.lSPrev').trigger('click');
            }, 1400);

            setTimeout(function() {
                equal(lSAction.children('a.lSPrev').css('display'), 'block', 'Prev = block'); 
                equal(lSAction.children('a.lSNext').css('display'), 'block', 'Next = block'); 
                start();
            }, 2000);
        });

        asyncTest("Two next clicks (to the end) and two previous to display the next button only", function() {

            $("#image-gallery").lightSlider(options);
            var lSAction = $('.lSSlideOuter .lSPagerWrapper > .lSAction');

            setTimeout(function() {
                lSAction.children('.lSNext').trigger('click');
            }, 300);

            setTimeout(function() {
                lSAction.children('.lSNext').trigger('click');
            }, 800);

            setTimeout(function() {
                lSAction.children('.lSPrev').trigger('click');
            }, 1400);

            setTimeout(function() {
                lSAction.children('.lSPrev').trigger('click');
            }, 2000);

            setTimeout(function() {
                equal(lSAction.children('a.lSPrev').css('display'), 'none', 'Prev = none'); 
                equal(lSAction.children('a.lSNext').css('display'), 'block', 'Next = block'); 
                start();
            }, 2400);
        });

    module('Gallery pager button movement tests,  vertical, looping');

        asyncTest("One next click", function() {

            options.vertical = true;
            options.thumbItem = 5;

            $("#image-gallery").lightSlider(options);
            var lSAction = $('.lSSlideOuter .lSPagerWrapper > .lSAction');

            lSAction.children('.lSNext').trigger('click');

            setTimeout(function() {
                start();
                equal(lSAction.children('.lSPrev').css('display'), 'block', 'Prev = block'); 
                equal(lSAction.children('.lSNext').css('display'), 'none', 'Next = none'); 
            }, 500);
        });


        asyncTest("One next click followed by one previous click", function() {

            $("#image-gallery").lightSlider(options);
            var lSAction = $('.lSSlideOuter .lSPagerWrapper > .lSAction');

            setTimeout(function() {
                lSAction.children('.lSNext').trigger('click');
            }, 300);

            setTimeout(function() {
                lSAction.children('.lSPrev').trigger('click');
            }, 900);

            setTimeout(function() {
                equal(lSAction.children('a.lSPrev').css('display'), 'none', 'Prev = none'); 
                equal(lSAction.children('a.lSNext').css('display'), 'block', 'Next = block'); 
                start();
            }, 1600);

        });


        asyncTest("Two next clicks (to the end)", function() {

            options.thumbItem = 4;

            $("#image-gallery").lightSlider(options);
            var lSAction = $('.lSSlideOuter .lSPagerWrapper > .lSAction');

            setTimeout(function() {
                lSAction.children('.lSNext').trigger('click');
            }, 300);

            setTimeout(function() {
                lSAction.children('.lSNext').trigger('click');
            }, 1000);

            setTimeout(function() {
                equal(lSAction.children('a.lSPrev').css('display'), 'block', 'Prev = block'); 
                equal(lSAction.children('a.lSNext').css('display'), 'none', 'Next = none'); 
                start();
            }, 1400);
        });


        asyncTest("Two next clicks (to the end) and one previous to display both nav buttons", function() {

            $("#image-gallery").lightSlider(options);
            var lSAction = $('.lSSlideOuter .lSPagerWrapper > .lSAction');

            setTimeout(function() {
                lSAction.children('.lSNext').trigger('click');
            }, 300);

            setTimeout(function() {
                lSAction.children('.lSNext').trigger('click');
            }, 800);

            setTimeout(function() {
                lSAction.children('.lSPrev').trigger('click');
            }, 1400);

            setTimeout(function() {
                equal(lSAction.children('a.lSPrev').css('display'), 'block', 'Prev = block'); 
                equal(lSAction.children('a.lSNext').css('display'), 'block', 'Next = block'); 
                start();
            }, 2000);
        });


        asyncTest("Two next clicks (to the end) and two previous to display the next button only", function() {

            $("#image-gallery").lightSlider(options);
            var lSAction = $('.lSSlideOuter .lSPagerWrapper > .lSAction');

            setTimeout(function() {
                lSAction.children('.lSNext').trigger('click');
            }, 300);

            setTimeout(function() {
                lSAction.children('.lSNext').trigger('click');
            }, 800);

            setTimeout(function() {
                lSAction.children('.lSPrev').trigger('click');
            }, 1400);

            setTimeout(function() {
                lSAction.children('.lSPrev').trigger('click');
            }, 2000);

            setTimeout(function() {
                equal(lSAction.children('a.lSPrev').css('display'), 'none', 'Prev = none'); 
                equal(lSAction.children('a.lSNext').css('display'), 'block', 'Next = block'); 
                start();
            }, 2400);
        });
}(jQuery));