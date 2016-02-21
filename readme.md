/*readme*/

＿人人人人人人人人人人人人人人人人人＿ 
＞ nengajou.html （年賀状.html）＜ 
￣Y^Y^Y^Y^Y^Y^Y^Y^Y^Y^Y^Y^Y^Y^Y^

form表示（フロント）
↓
データ保存（node）
↓
データをもとに表示（フロント）

・index.html
　・global.js
　　・commonの定義
　・util.js
　　・Webストレージ
　　　・sessionStorage
　・render.js
　　・viewの構築
　・viewModel.js
　　・表示
　　　・login
　　　・page
　　　・form
　・nengajou.js
　　・イメージ操作
　　　・setInterval
　　　・imageGallery
　　・ajax
　　　・omoteとuraの取得
　　　　・$.when（ディファード処理）
　・omote.html
　　・縦書き
　・ura.html
　　・手書き風
　・negajou.css
　　・奥行き軸（perspectiveの設定、safariではtransform: rotate;で必要）
　　・クリック回転
　　・タップ点滅
　　・日の出
　　・transform, transition, animation
　　・スマホ対応に-webkit-

・nodeサーバー
　・リクエスト待ち受け
　　・それぞれのファイル読み込み
　　・formデータの待ち受け
　　　・formデータの書き込み

