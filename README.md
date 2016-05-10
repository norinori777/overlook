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



* data
db.tableConfig.insert({ table: "test", "constructure" : [ { "column" : "server", "title" : "サーバ" }, { "column" : "host", "title" : "ホス ト" }, { "column" : "IP", "title" : "IPアドレス" }, { "column" : "Service", "title" : "サービス名" } ], "candidate" : [ "host", "Service" ], "placeholder": "キーワードを入力してください"} )

db.test.insert({server: 'test1', host: 'testhost1', IP: '192.168.11.1', Service: 'テストサービス１'})
db.test.insert({server: 'test2', host: 'testhost2', IP: '192.168.11.2', Service: 'テストサービス２'})
db.test.insert({server: 'test3', host: 'testhost3', IP: '192.168.11.3', Service: 'テストサービス３'})
db.test.insert({server: 'test4', host: 'testhost4', IP: '192.168.11.4', Service: 'テストサービス４'})


db.tableConfig.insert({ table: "test7", "constructure" : [ { "column" : "server", "title" : "サーバ" }, { "column" : "host", "title" : "ホス ト" }, { "column" : "IP", "title" : "IPアドレス" }, { "column" : "Service", "title" : "サービス名" }, { "column" : "hoge1", "title" : "ほげ１" }, { "column" : "hoge2", "title" : "ほげ2" }, { "column" : "hoge3", "title" : "ほげ3" }, { "column" : "hoge4", "title" : "ほげ4" }, { "column" : "hoge5", "title" : "ほげ5" }, { "column" : "hoge6", "title" : "ほげ6" }, { "column" : "hoge7", "title" : "ほげ7" }, { "column" : "hoge8", "title" : "ほげ8" }, { "column" : "hoge9", "title" : "ほげ9" }, { "column" : "hoge10", "title" : "ほげ１0" }, { "column" : "hoge11", "title" : "ほげ１1" }, { "column" : "hoge12", "title" : "ほげ１2" }, { "column" : "hoge13", "title" : "ほげ１3" }, { "column" : "hoge14", "title" : "ほげ１4" }, { "column" : "hoge15", "title" : "ほげ１5" }, { "column" : "hoge16", "title" : "ほげ１6" }, { "column" : "hoge17", "title" : "ほげ１7" }, { "column" : "hoge18", "title" : "ほげ１8" }, { "column" : "hoge19", "title" : "ほげ１9" } ], "candidate" : [ "host", "Service" ], "placeholder": "キーワードを入力してください"},title: '' )

db.test7.insert({server: 'test', host: 'testhost4', IP: '192.168.11.4', Service: 'テストサービス４', hoge1: 'ほげ１', hoge2: 'ほげ２', hoge3: 'ほげ３', hoge4: 'ほげ４', hoge5:'ほげ５',hoge6:'ほげ６',hoge7: 'ほげ７',hoge8:'ほげ８',hoge9:'ほげ９', hoge10: 'ほげ１０',　hoge11:'ほげ１１' ,hoge12: 'ほげ1２', hoge13: 'ほげ1３', hoge14: 'ほげ1４', hoge15:'ほげ1５',hoge16:'ほげ1６',hoge17: 'ほげ1７',hoge18:'ほげ1８',hoge19:'ほげ1９'})
