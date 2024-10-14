const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');

function addItem(e) {
  e.preventDefault();
  const newItem = itemInput.value;
  if (newItem === '') {
    alert('Please enter an item');
    return;
  }

  const li = document.createElement('li');
  const button = createButton('remove-item btn-link text-red');

  li.appendChild(document.createTextNode(newItem));

  li.appendChild(button);
  itemList.appendChild(li);
  itemInput.value = '';
}

function createButton(classNames) {
  const btn = document.createElement('button');
  btn.className = classNames;
  const icon = createIcon('fa-solid fa-xmark');
  btn.appendChild(icon);
  return btn;
}

function createIcon(classNames) {
  const icon = document.createElement('i');
  icon.className = classNames;
  return icon;
}

itemForm.addEventListener('submit', addItem);
