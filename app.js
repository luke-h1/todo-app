loadEvents();
function loadEvents() {
    document.querySelector('form').addEventListener('submit', submit);
    document.querySelector('a').addEventListener('click', clearList);
    document.querySelector('ul').addEventListener('click', deleteOrTick);
}

function deleteOrTick(e) {
    if (e.target.className === 'btn btn-danger clear-item') {
        deleteTask(e);
    } else {
        tickTask(e);
    }
}

function deleteTask(e) {
    let remove = e.target.parentNode;
    let parentNode = remove.parentNode;
    parentNode.removeChild(remove);
}

function tickTask(e) {
    const todo = e.target.parentElement;
    if (e.target.checked) {
        todo.style.textDecoration = 'line-through';
        todo.style.color = 'red';
    } else {
        todo.style.textDecoration = 'none';
        todo.style.color = ' #2f4f4f';
    }
}

function clearList(e) {
    const ul = document.querySelector('ul');
    ul.innerHTML = '';
}

function submit(e) {
    e.preventDefault();
    const input = document.querySelector('input');
    if (input.value != '') {
        addTask(input.value); // as long as the user enters something, then submit it. else don't
        input.value = ''; //clear out input value after user submits it
    } else {
        window.alert('enter a valid value');
    }
}

// function addTask(task) {
//     const ul = document.querySelector('ul');
//     const li = document.createElement('li');
//     li.innerHTML = `<li class="collection-item">
//                 ${task}
//                 <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
//                 <label class="form-check-label" for="inlineCheckbox1"></label>
//                 </a>
//                 <button type="button" class="btn btn-danger clear-item">remove todo</button>
//                 `;
//     ul.appendChild(li);
// }



/*=====================
Check box disabled  
Need to learn how to 
increment
the value of the input 
attributes 
and values... 
========================*/ 
function addTask(task) {
    let ul = document.querySelector('ul');
    let li = document.createElement('li');
    li.innerHTML = `<li class="collection-item"> ${task} 
    <button type="button" class="btn btn-danger clear-item">remove todo</button>`;
    ul.appendChild(li);
}







console.log('🚀 https://github.com/luke-h1/todo-app-v2 🚀');
