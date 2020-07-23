loadEvents();

function loadEvents() {
    document.querySelector('form').addEventListener('submit', submit);
    document.querySelector('a').addEventListener('click', clearList);
    document.querySelector('form-check-label').addEventListener('click', deleteOrTick);
}

// delete tick
/*  ==================
    THIS DOESN"T WORK 
    ==================*/
function deleteOrTick(e) {
    if (e.target.className === 'delete-item secondary-content') deleteTask(e);
    else {
        tickTask(e);
    }
}

// delete task

/*  ==================
    THIS DOESN"T WORK 
    ==================*/
function deleteTask(e) {
    let remove = document.querySelector('collection-item');
    remove.remove;
}

function clearList(e) {
    // this works
    const ul = (document.querySelector('ul').innerHTML = '');
}

// submit task function // this works
function submit(e) {
    e.preventDefault();
    const input = document.querySelector('input');
    if (input.value != '') addTask(input.value); // as long as the user enters something, then submit it.
    input.value = ''; //clear out input value after user submits it
}

// add todo tasks // this works
function addTask(task) {
    const ul = document.querySelector('ul');
    const li = document.createElement('li');
    li.innerHTML = `<li class="collection-item">
                ${task}
                <a href="#" class="delete-item secondary-content">
                <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
                <label class="form-check-label" for="inlineCheckbox1"></label>
                </a> 
                `;

    ul.appendChild(li);
}
