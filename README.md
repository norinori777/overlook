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
	* main
		* 各コンポートをまとめたメインページ

* Fluxxor
	* SearchAction.js
	* SearchStore.js

