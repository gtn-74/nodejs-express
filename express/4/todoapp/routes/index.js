const express = require("express");
const router = express.Router();

let todos = [];

/* GET home page. */
// nextは、ミドルウェア関数を呼び出すコールバック
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express", todos: todos });
  // res.render(view, [locals], [callback])
  // view:レンダリングするビューの名前。上だとindexファイル
  // locals:ビューに渡すローカル変数を含むオブジェクト。【ぶっちゃけよくわからん】
  // callback:レンダリング完了後に呼び出される関数
});

/* post */
router.post("/", function (req, res, next) {
  const todo = req.body.add;
  todos.push(todo);
  res.redirect("/"); // Getリクエストを
  // res.render("index", { title: "Test" });
});

module.exports = router;

/*
res.redirect()は、クライアントに新しいURLへ移動するよう指示します。
res.render()は、サーバー側でHTMLを生成し、クライアントにその内容を直接送信します。
*/
