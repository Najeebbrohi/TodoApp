var list = document.getElementById('list');

function addItem(){
    var todo_item = document.getElementById('todo_item');
    var li = document.createElement('li');
    var liText = document.createTextNode(todo_item.value);
    li.setAttribute('class','liText');
    li.appendChild(liText);
    

    var deleteBtn = document.createElement('button');
    var delText = document.createTextNode('DEL');
    deleteBtn.setAttribute('class','btn');
    deleteBtn.setAttribute('onclick','deleteItem(this)');
    deleteBtn.appendChild(delText);

    var editBtn = document.createElement('button');
    var editText = document.createTextNode('EDIT');
    editBtn.setAttribute('class','btn');
    editBtn.setAttribute('onclick','editItem(this)');
    editBtn.appendChild(editText);

    li.appendChild(deleteBtn);
    li.appendChild(editBtn);

    list.appendChild(li);
    todo_item.value = "";
}

function deleteItem(e){
    e.parentNode.remove();
}

function editItem(e){
    var item = e.parentNode.firstChild.nodeValue;
    var val = prompt("Enter updated Value",item);
    e.parentNode.firstChild.nodeValue = val;
}

function deleteAll(){
    list.innerHTML = "";
}