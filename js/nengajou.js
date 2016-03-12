/*nengajou.js*/

common.page = (function () {

  var pageFunk = {};

    pageFunk.nengajou = function () {
      if (common.util.getSessionStorage('Login')) {
        //ログイン済み
        console.info('ログインしてます');
      } else {
        //未ログイン
        $('body').html('<p style="color: #fff;">ログインしていません。<br>ホームに戻ります。</p>');
        setTimeout(function () {
          location.href = 'http://satoru-t-0403.boo.jp/';
        }, 3000);
        return false;
      }

      $.when(
        $.ajax({
          url: '/tmp/omote.html',
          data: 'GET',
          dataType: 'html'
        }),
        $.ajax({
          url: '/tmp/ura.html',
          data: 'GET',
          dataType: 'html'
        })
      ).done(function (omote, ura) {

        var omote = omote || null;
        var ura = ura || null;

        // まず表レンダリング
        var $nengajou = $('.wrap-nengajou');
        common.render.init({
          tmp: $nengajou,
          content: omote,
          userName: common.util.getSessionStorage('User')
        });

        // イベントセット
        var setCount = 0;
        var w, t, r, b, saruFlg;
        var saruAnimation = setInterval(function () {
          setCount++;
          console.log(setCount);
          if (setCount === 1) {
            w = '35%';
            t = '75%';
            r = '10%';
            b = '14px';
            saruFlg = true;
          }else if (setCount === 2) {
            w = '35%';
            t = '20%';
            r = '-5%';
            b = '50px';
            saruFlg = true;
          }else if (setCount === 3) {
            w = '15%';
            t = '-6%';
            r = '10%';
            b = '14px';
            saruFlg = true;
          }else{
            $('.tap').show();
            clearInterval(saruAnimation);
            saruFlg = false;
          }

          if (saruFlg) {
            $('.saru').css({
              "width": w,
              "top": t,
              "right": r,
              "border-radius": b
            });
            $('.saru').attr('src', 'img/saru-'+setCount+'.png');
          }else{
            saruCount = 0;
            console.info('fin');
          }
        }, 2500);

        $('body').on('click', '.wrap-nengajou', function () {
          var $ura = $nengajou.children(".ura");
          var $omote = $nengajou.children(".omote");
          if (!$ura.length) {
            $nengajou.css({
              'transform': 'rotateY(180deg)'
            });
            $omote.css({'opacity': '0'});
            setTimeout(function () {
              common.render.init({
                tmp: $nengajou,
                content: ura
              });
              // イメージギャラリー
              imageGallery.Fade.start('.gallery', true);
              // 日の出アニメーション
              $('.hinode.type-01').css({
                "transform": "translate3d(150px, -104px, 20px)"
              });
              $('.type-02').css({
                "opacity": "1"
              });
              $('.type-03').css({
                "opacity": "1"
              });
              $('.type-04').css({
                "opacity": "1"
              });
              setTimeout(
                function () {
                  $('.type-03, .type-04').fadeTo(500, 0);
              }, 8000);
            }, 1900);
          }else{
            $nengajou.css({
              'transform': 'rotateY(0deg)'
            });
            $ura.css({'opacity': '0'});
            setTimeout(function () {
              common.render.init({
                tmp: $nengajou,
                content: omote,
                userName: common.util.getSessionStorage('User')
              });
              setTimeout(function () {
                $('.tap').css({
                  'display': 'block',
                  'animation-play-state': 'paused'
                });
              }, 100);
            }, 1900);
          }
        });
      });
    };

  return pageFunk;

})();
