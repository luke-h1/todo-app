loadEvents();

function loadEvents() {
    document.querySelector('form').addEventListener('submit', submit);
    document.getElementById('test').addEventListener('click', clearList);
    document.querySelector('ul').addEventListener('click', deleteOrTick);
}

// delete tick function
function deleteOrTick(e) {
    if (e.target.className === 'fa fa-remove') deleteTask(e);
    else {
        tickTask(e);
    }
}

// tick an individual task:
function tickTask(e) {
    const task = document.querySelector('.form-check-label');
    if (task.target.checked) {
        task.style.textDecoration = 'line-through';
        task.style.color = 'red'; // change to better color maybe ???
    } else {
        task.style.textDecoration = 'none';
        // document.getElementsByClassName('btn-pageMenu')[0].style.display
        task.style.color = '#2f4f4f';
    }
}

// clear out the UL innerHTML
function clearList(e) {
    const ul = (document.querySelector('ul').innerHTML = '');
}

// submit task function
function submit(e) {
    e.preventDefault();
    const input = document.querySelector('input');
    if (input.value != '') addTask(input.value); // as long as the user enters something, then submit it.
    input.value = ''; //clear out input value after user submits it
}

// add todo tasks

function addTask(task) {
    const ul = document.querySelector('ul');
    const li = document.createElement('li');
    li.innerHTML = `<li class="collection-item">
                ${task}
                <a href="#" class="delete-item secondary-content">
                <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
                <label class="form-check-label" for="inlineCheckbox1"></label>
                </a> 
                `


    ul.appendChild(li);
    document.getElementsByClassName('card-action').style.display = 'block';
}
