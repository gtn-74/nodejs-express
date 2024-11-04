// 送信
const addTask = document.querySelector(".add");
// 呼び出し
const list = document.querySelector(".tasks");

let todos = [];

// post
function addTodo(text) {
  const todo = {
    id: Date.now(), // 入力時間をidとしてる
    text, // 入力値を文字列としている
  };
  todos.push(todo);
}

// get
function renderTodo() {
  let temp = "";
  todos.forEach((todo) => {
    const html = `
        <li key="${todo.id}">
            <span>${todo.text}</span>
        </li>
        `;
    temp += html;
  });
  list.innerHTML = temp;
}

// 送信Enter押下後に走るイベント
addTask.addEventListener("submit", (e) => {
  e.preventDefault(); // !()がないイベント発生しない

  // ? 入力値の取得？
  const text = addTask.add.value.trim();
  if (text !== "") {
    addTodo(text);
    addTask.reset();
    renderTodo();
  }
});
