let equationStr = "";

function insert(num) {
  equationStr += num;
  display();
}

function equals() {
  const answer = eval(equationStr);
  equationStr = answer.toString();
  display();
}

function clean() {
  equationStr = "";
  display();
}

function back() {
  equationStr = equationStr.slice(0, -1);
  display();
}

function display() {
  document.querySelector('.textview').value = equationStr;
}