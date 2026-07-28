### typeとinterfaceの違い

interfaceのほうが先にできたもの。同名のinterfaceを再定義すると、宣言マージで型の結合が起きる
一方、typeは再定義が不可だが、Union, タプル, 関数, プリミティブ型を表現できる。

### processについて

processはnode.jsの機能なのでtsは初期状態だと認知していないので型エラーが起こる。
tsconfigのtypeに"node"を追加すれば解決👍

### packege.json

scriptはエイリアスみたいなもの。
import, exportを使うのであればtypeに"module"を追加すること

### error処理 (try, catch)

errorは
{
errno: -4058,
code: 'ENOENT',
syscall: 'open',
path: './tasks.json'
}
こんな感じの情報が入るのでconst fileError = error as NodeJS.ErrnoExceptionで取って、fileError.codeとかで使う。
このときは正常終了ではなく異常終了なのでreturnではなくthrow

### switch

比較に使う変数が同じときはswitch,case:で対応可能。break入れるのを忘れると呼ばれたところから下がすべて実行されちゃうので注意
ifはbreak使えないのでelseを使う
