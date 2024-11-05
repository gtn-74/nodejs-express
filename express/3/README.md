# HTTP サーバー構築

## Node.js とは

サーバー側の処理を実装できる`javascript環境`のこと [^1]

## Web サーバーとは・http サーバーとは

Web ページに必要なデータが保存されているコンピュータ


WebクライアントとWebサーバのやりとり (通信) の手順やルールのことを**HTTP**といい、HTTPに則って行われる通信のことを**HTTP通信**といいます。

HTTPリクエスト、Webサーバが要求に応じてデータを返送することを**HTTPレスポンス**といいます。

**つまり、httpサーバーは、webサーバーの一部である。**

```JavaScript
// プロトコル通信を指定
const http = require("http") // !Node.jsがPC内に存在していれば、利用できるモジュール
const port = 3000

//
const server = http.createServer((request,response)=>{
// * - 第一引数：ステータス行：HTTPリクエストが成功したか失敗したかを表すデータが入る
// * - 第二引数：ヘッダー：送信するデータの情報など、追加情報が入る
response.writeHead(/* ステータスコード */ 200,{
 /* メディアタイプを指定 */ "Content-Type": "text/html"
})
// * - 本文：データの内容
const responseMessage = "<h1>Hello World</h1>"
response.end(responseMessage)
console.log(`Sent a response: ${responseMessage}`);
})
// httpレスポンス
/**
 * - ステータス行：HTTPリクエストが成功したか失敗したかを表すデータが入る
 * @name response.writeHead()
 * - ヘッダー：送信するデータの情報など、追加情報が入る
 * @http status code
 * - 本文：データの内容が入る
 * */

/**
 * text/plain：プレーンテキスト
 * text/html：HTMLドキュメント
 * application/json：JSONデータ
 * image/png:PNG画像
 *
 * */

// ポート
// ネットワークがサーバーを通るドア的なもの 0~65,535番まで存在する
// ポートが空いていないと通信ができない
// ポートが待機状態じゃない場合も通信できない(listen())

server.listen(port)
console.log(`The server has started and is listening on port number: ${port}`);

// `http://localhost:3000/`

// localhost
// サーバーの住所。IPアドレス、ドメイン名を指す
// localhostは特殊で、自分のPCを指す

// ドメイン名 = DSNで変換したIPアドレス

// localhost = `127.0.0.1`
```


---

[^1]: 2 は、http サーバーを立ててなかったっぽい
