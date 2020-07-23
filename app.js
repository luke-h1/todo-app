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
    // this works
    const ul = (document.querySelector('ul').innerHTML = '');
}

function submit(e) {
    e.preventDefault();
    const input = document.querySelector('input');
    if (input.value != '') addTask(input.value); // as long as the user enters something, then submit it.
    input.value = ''; //clear out input value after user submits it
}

function addTask(task) {
    const ul = document.querySelector('ul');
    const li = document.createElement('li');
    li.innerHTML = `<li class="collection-item">
                ${task}
                <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
                <label class="form-check-label" for="inlineCheckbox1"></label> 
                </a> 
                <button type="button" class="btn btn-danger clear-item">remove todo</button>
                `;
    ul.appendChild(li);
}
