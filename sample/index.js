"use strict";
const port = 3000;
const http = require("http");

const server = http.createServer((request, response) => {
  // サーバーが立ったら、HTMLを返却する　//! // HTTPヘッダーの設定
  response.writeHead(200, { //! データの種類、計しい、圧縮方法の詳細が明示される
    "Content-Type": "text/html",
  });
// ! 

  //   返却内容を宣言
  const responseMessage = "<h1>Hello Node.js</h1>";
//   返却内容を書き出す宣言
  response.write(responseMessage);
//   わからない //! サーバー側は、これを呼び出すことで、クライアント側に対して、送信完了の旨を伝えたことになる様子
  response.end();

//   ログに表示させる
  console.log("通信取れてるよ");
});
// サーバー　//!　指定ポートでサーバーを開始
server.listen(port);
console.log(`${port}`);
