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

module.tsのActionTypesをexportするのはテストのためだけ？

Counter.spec.tsxのテストするのに謎のエラーが出てたのを
https://github.com/airbnb/enzyme/issues/503
を参考にしたけどぜんぜんわかってない

onChangeとかでReactのFormEventとかうけとると、targetがEventTargetになるけど、EventTargetはHTMLElementとは限らないのでvalueがとれない
http://qiita.com/wamei/items/43753e03821964719f31

React.Component<Props, void>
React.Component<Props, udnefined>
React.Component<Props, null>
どれがいいんだろう？
react-routerの型定義ではvoidだからvoidにしとくか


クラスのメンバのアクセス修飾子を省略するとpublic

typescriptのgetter,setterがあるので使って見たい
export type ってなんだ？
