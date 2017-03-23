@typesは公式だとdependenciesやけどdevDepenciesの方がいいのかな？

awesome-typescript-loaderがうまく動かなかったのでts-loaderを使用

`import React from 'react';`やとエラーになる、`* as React`ってせなあかんの？
型定義ファイルの問題？

tsconfigの中身はちゃんと理解せずにそのまま

Reduxは内部に型定義持ってるから@types/reduxは不要らしい
そしてtsconfigにmoduleresolution:nodeを指定しないとコンパイルエラーになる

isomorphic-fetchはfetchAPIのpolyfill

Promiseを使うため（？）にtsconfigのlibにES2015を追加（他のはtarget:es5のデフォルト）

IResponseが見つからんっていうからResponseにした

fetchのcredentialsをincludeにするとAPI側のAccess-Control-Allow-Originに*が使えないみたいなのでとりあえずコメントアウト
