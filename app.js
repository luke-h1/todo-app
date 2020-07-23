loadEvents();

function loadEvents() {
    document.querySelector('form').addEventListener('submit', submit);
    document.getElementById('test').addEventListener('click', clearList);
    document.querySelector('ul').addEventListener('click', deleteOrTick);
}

// delete tick function
function deleteOrTick(e) {
    if (e.target.className === 'delete-item') deleteTask(e);
    else {
        tickTask(e);
    }
}

// delete task function
function deleteTask(e) {
    let remove = e.target.parentNode;
    let parentNode = remove.parentNode;
    parentNode.removeChild(remove);
}

// tick an individual task:
function tickTask(e) {
    const task = e.target.nextSibling;
    if (e.target.checked) {
        task.style.textDecoration = 'line-through';
        task.style.color = 'red'; // change to better color maybe ???
    } else {
        task.style.textDecoration = 'none';
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
    input.value = '' //clear out input value after user submits it 
}


// add todo tasks 

function addTask(task){
    const ul = document.querySelector('ul'); 
    const li = document.createElement('li'); 
    li.innerHTML = `
    <li class="collection-item">
                ${task}
                <a href="#" class="delete-item secondary-content">
                  <i class="fa fa-remove"></i>
    
    `
    ul.appendChild(li) 
    document.querySelector('card-action').style.display = 'block'  
}