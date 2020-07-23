loadEvents();
function loadEvents() {
    document.querySelector('form').addEventListener('submit', submit);
    document.querySelector('a').addEventListener('click', clearList);
    document.querySelector('ul').addEventListener('click', deleteOrTick);
}

/* 
====================
THESE FUNCTIONS don't WORK 
====================
*/
function deleteOrTick(e) {
    if (e.target.className === 'btn btn-danger clear-item') {
        deleteTask(e);
    } else {
        // tickTask(e);
        console.log(':(')
    }
}

function deleteTask(e) {
    let remove = e.target.parentNode;
    let parentNode = remove.parentNode;
    parentNode.removeChild(remove);
}




/* 
====================
THESE FUNCTIONS WORK 
====================
*/

function clearList(e) {
    // this works
    const ul = (document.querySelector('ul').innerHTML = '');
}

// submit task function
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
                <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
                <label class="form-check-label" for="inlineCheckbox1"></label> 
                </a> 
                <button type="button" class="btn btn-danger clear-item">remove todo</button>

                `;

    ul.appendChild(li);
}
