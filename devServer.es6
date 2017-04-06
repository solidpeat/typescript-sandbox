const path = require('path');
const express = require('express');
const app = express();

// CORSを許可する
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/api/count', (req, res) => {
  res.contentType('application/json');
  const obj = {'amount': 100};
  // 非同期感を出すために応答をわざと遅延させる。
  setTimeout(() => res.json(obj), 1000);
  // res.status(400).json(obj); // for error testing
});

app.get('/api/todos', (req, res) => {
  res.contentType('application/json');
  const todos = [
    {id: 1, text: 'todo 1', isComplete: true},
    {id: 2, text: 'todo 2', isComplete: false}
  ];
  res.json(todos);
});

app.listen(3000, (err) => {
  if (err) {
    console.log(err);
  }
  console.log('server start at port 3000')
});
