const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  // res.render(view, [locals], [callback])
  // view:レンダリングするビューの名前。上だとindexファイル
  // locals:ビューに渡すローカル変数を含むオブジェクト。【ぶっちゃけよくわからん】
  // callback:レンダリング完了後に呼び出される関数
});


module.exports = router;
