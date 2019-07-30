const list = document.getElementById('todo-list');
const itemCountSpan = 'item-count';
const uncheckedCountSpan = 'unchecked-count';

function SetCount(selector, newVal) {
  document.getElementById(selector).innerHTML = newVal;
}

function newTodo() {
  newTask = prompt('New task');
  if (newTask != '') {
    let li = document.createElement("li");
    li.setAttribute("class", "todo-container");

    let checkbox = document.createElement('input');
    checkbox.setAttribute("class", "todo-checkbox");
    checkbox.type = "checkbox";
    checkbox.value = 0;

    let text = document.createElement('span');
    text.setAttribute("class", "todo-text");
    text.appendChild(document.createTextNode(newTask));

    let spanDel = document.createElement('span');
    spanDel.setAttribute("class", "todo-delete");
    spanDel.appendChild(document.createTextNode('Delete'));
    
    li.appendChild(checkbox);
    li.appendChild(text);
    li.appendChild(spanDel);

    list.appendChild(li);
  }
}

function uncheckedSpan(array) {
  result = 0;
  for (let index = 0; index < array.length; index++) {
    if (!array[index].checked) result++; 
  }
  return result;
}

document.querySelector('body').addEventListener('click', function(event) {
  // click input
  if (event.target.tagName.toLowerCase() === 'input') {
    if (event.target.checked) {
      event.target.parentElement.style.textDecoration = "line-through";
    }
    else {
      ChangeCount(uncheckedCountSpan, 1);
      event.target.parentElement.style.textDecoration = "none";
    }
  }
  // click span-delete
  if (event.target.className.toLowerCase() === 'todo-delete') {
    if (confirm('Delete this task?')) {
      el = event.target.parentElement;
      el.parentElement.removeChild(el);
    }
  }

  let chs = document.getElementsByClassName('todo-checkbox');
  let itemCountSpanVal = chs.length;
  let uncheckedCountSpanVal = uncheckedSpan(chs);
  SetCount(itemCountSpan, itemCountSpanVal);
  SetCount(uncheckedCountSpan, uncheckedCountSpanVal);
});