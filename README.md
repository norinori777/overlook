# 検索結果表示サイト（テーブル表示）

* 機能
	* 検索結果を一覧として表示する。
		* 検索キーワードを入力すると候補が表示される。
	* 検索結果のレコードを選択すると、レコードの詳細内容が表示される。

* 利用技術
	* react.js
	* Flux
		* Redux
	* gulp
	* browserify
	* babelify
	* SASS
	* CSS
		* BEM

* コンポーネント
	* SimpleHeader
		* ページのヘッダー部を表示し、中央に文字を表示する。
	* HorizaontalMenu
		* 横並びのメニューを表示する
	* Search
		* 入力ボックスとボタンをまとめたコンポーネント
	* InputCandidate
		* 入力ボックスに文字を入力すると、候補文字が表示するコンポーネント
		* List
			* <datalist>タグ配下に<option>タグの複数生成するコンポーネント
	* SimpleTable
		* テーブルを使用して一覧を表示
	* SimpleModal
		* モーダルを表示、今回の構成としては、テーブルのレコードをクリック時にレコード内容を表示したモーダルを表示するようにした。
	* main
		* Reduxのコンテナーを実装。
		* 各コンポートをまとめたメインページ。

* Redux
	* actions
		* index.js
			* actionを実装。
	* reducer
		* search.js
			* Reducerを実装。actionからの要求を基にStoreを更新

* 課題
	* Reduxのdispatchは、コンテナーのmainにpropsとして、受け渡されるが、コンテナー配下のコンポーネントには、バケツリレーで受け渡している。バケツリレーを回避するためのFluxだったため、他の実装方法を検討中。



* テーブル構成情報
db.tableConfig.update({"table":"test"},{$set:{"constructure" : [ { "column" : "server", "title" : "サーバ", "size": "s","visible": true }, { "column" : "host", "title" : "ホス ト", "size": "s", "visible": true }, { "column" : "IP", "title" : "IPアドレス", "size": "m","visible": true }, { "column" : "Service", "title" : "サービス名", "size": "xl","visible": true } ]}})

* example data
db.test.insert({server: 'test1', host: 'testhost1', IP: '192.168.11.1', Service: 'テストサービス１'})
db.test.insert({server: 'test2', host: 'testhost2', IP: '192.168.11.2', Service: 'テストサービス２'})
db.test.insert({server: 'test3', host: 'testhost3', IP: '192.168.11.3', Service: 'テストサービス３'})
db.test.insert({server: 'test4', host: 'testhost4', IP: '192.168.11.4', Service: 'テストサービス４'})


db.tableConfig.update({"table":"test"},{$set:{"constructure" : [ { "column" : "server", "title" : "サーバ", "size": "s","visible": true }, { "column" : "host", "title" : "ホス ト", "size": "s", "visible": true }, { "column" : "IP", "title" : "IPアドレス", "size": "m","visible": true }, { "column" : "Service", "title" : "サービス名", "size": "xl","visible": true } ]}})
db.tableConfig.update({"table":"test7"},{$set:{"constructure" : [ { "column" : "server", "title" : "サーバ", "size": "m","visible": true }, { "column" : "host", "title" : "ホス ト", "size": "m","visible": true }, { "column" : "IP", "title" : "IPアドレス", "size": "l","visible": true }, { "column" : "Service", "title" : "サービス名", "size": "xl","visible": true }, { "column" : "hoge1", "title" : "ほげ１", "size": "l" }, { "column" : "hoge2", "title" : "ほげ2", "size": "l" }, { "column" : "hoge3", "title" : "ほげ3", "size": "l" }, { "column" : "hoge4", "title" : "ほげ4", "size": "l" }, { "column" : "hoge5", "title" : "ほげ5", "size": "l","visible": true }, { "column" : "hoge6", "title" : "ほげ6", "size": "l" }, { "column" : "hoge7", "title" : "ほげ7", "size": "l" }, { "column" : "hoge8", "title" : "ほげ8", "size": "l" }, { "column" : "hoge9", "title" : "ほげ9", "size": "l" }, { "column" : "hoge10", "title" : "ほげ１0", "size": "l","visible": true }, { "column" : "hoge11", "title" : "ほげ１1", "size": "l" }, { "column" : "hoge12", "title" : "ほげ１2", "size": "l" }, { "column" : "hoge13", "title" : "ほげ１3", "size": "l" }, { "column" : "hoge14", "title" : "ほげ１4", "size": "l" }, { "column" : "hoge15", "title" : "ほげ１5", "size": "l" }, { "column" : "hoge16", "title" : "ほげ１6", "size": "l" }, { "column" : "hoge17", "title" : "ほげ１7", "size": "l" }, { "column" : "hoge18", "title" : "ほげ１8", "size": "l" }, { "column" : "hoge19", "title" : "ほげ１9", "size": "l" } ]}})

