###typeとinterfaceの違い
interfaceのほうが先にできたもの。同名のinterfaceを再定義すると、宣言マージで型の結合が起きる
一方、typeは再定義が不可だが、Union, タプル, 関数, プリミティブ型を表現できる。