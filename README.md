# 検索結果表示サイト（テーブル表示）

* 機能
	* 検索結果を一覧として表示する。
		* 検索キーワードを入力すると候補が表示される。
	* 検索結果のレコードを選択すると、レコードの詳細内容が表示される。

* 利用技術
	* react.js
	* Flux
		* Fluxxor
	* gulp
	* browserify
	* reactify
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
		* 各コンポートをまとめたメインページ

* Fluxxor
	* SearchAction.js
	* SearchStore.js



* data
db.tableConfig.insert({ table: "test", "constructure" : [ { "column" : "server", "title" : "サーバ" }, { "column" : "host", "title" : "ホス ト" }, { "column" : "IP", "title" : "IPアドレス" }, { "column" : "Service", "title" : "サービス名" } ], "candidate" : [ "host", "Service" ], "placeholder": "キーワードを入力してください"} )

db.test.insert({server: 'test1', host: 'testhost1', IP: '192.168.11.1', Service: 'テストサービス１'})
db.test.insert({server: 'test2', host: 'testhost2', IP: '192.168.11.2', Service: 'テストサービス２'})
db.test.insert({server: 'test3', host: 'testhost3', IP: '192.168.11.3', Service: 'テストサービス３'})
db.test.insert({server: 'test4', host: 'testhost4', IP: '192.168.11.4', Service: 'テストサービス４'})