/*viewModel.js*/
console.log(this);
console.log(common);
//ユーザーデータ取得
$.ajax({
  url: '/user/data.json',
  data: 'GET',
  dataType: 'json',
}).done(function (d) {
  //ログインデータ取得
  //ログイン情報をストレージへ
  common.util.setSessionStorage('Login', d.login);
  common.util.setSessionStorage('User', d.user);
  //ページ表示
  common.page.nengajou();

}).fail(function (d) {
  //ログインデータ取得失敗or未ログイン
  console.error(d);
  //入力モーダル
  var modal = '<div class="input"><p>あなたの名前を入力してください<br><span style="font-size: 9px;">キーボードで決定せず、下の決定ボタンを押してください</span></p><form id="you-name" action="http://10.17.208.153:1337/" method="post"><input type="text" name="name" size="15" maxlength="20" placeholder="例：田中暁" style="border: 1px solid #ccc; margin-top: 20px;"><input type="submit" name="decide" value="決定する" style="display: block; margin: 20px auto;"></form></div>';
  $('body').prepend(modal);

  var $divModal = $('body').find('.input');

  $divModal.css({
    "width": "100%",
    "height": "100%",
    "background-color": "#fff",
    "padding": "20px",
    "text-align": "center",
    "position": "absolute",
    "top": "0",
    "left": "0",
    "z-index": "1000"
  });
});
