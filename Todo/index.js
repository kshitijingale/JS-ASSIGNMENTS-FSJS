const inputText = document.querySelector('.input');
const inputBtn = document.querySelector('.addButton');
const container = document.querySelector('.container')
const tasks = [];

inputBtn.addEventListener('click', () => {
    if (inputText.value == '') {
        alert('Please enter some value');
        return
    }
    createTask();
})

inputText.addEventListener('keydown', (event) => {
    if (event.key == 'Enter') {
        if (inputText.value == '') {
            alert('Please enter some value');
            return
        }
        createTask();
    }
})

function deleteTask() {
    const index = tasks.indexOf(document.activeElement.parentElement);
    tasks.splice(index, 1);
    display();
    return;
}

function createTask() {
    const newDiv = document.createElement('div');
    newDiv.classList = 'item';

    const taskFragment = document.createDocumentFragment();

    // Input
    const taskInput = document.createElement('input');
    taskInput.classList = 'item_input';
    taskInput.value = inputText.value;
    taskInput.disabled = true;

    // Edit Button
    const editBtn = document.createElement('button');
    editBtn.classList = 'editButton';
    editBtn.innerText = 'EDIT';
    editBtn.setAttribute("onclick", "editTask()");

    // Delete Button
    const deleteBtn = document.createElement('button');
    deleteBtn.classList = 'deleteButton';
    deleteBtn.innerText = 'DELETE';
    deleteBtn.setAttribute("onclick", "deleteTask()")

    // Item Div Element
    taskFragment.appendChild(taskInput);
    taskFragment.appendChild(editBtn);
    taskFragment.appendChild(deleteBtn);

    newDiv.appendChild(taskFragment);

    tasks.push(newDiv);
    display();
    return
}

function editTask() {
    const item = document.activeElement.parentElement;
    const inputElement = item.firstChild;
    inputElement.disabled = false;
    inputElement.focus();

    // Edit Button -> Save Button
    const editBtn = item.children[1];
    editBtn.innerText = "Save";
    editBtn.addEventListener('click', () => {
        editBtn.innerText = "Edit";
        inputElement.disabled = true;
    })
}

function display() {
    container.innerHTML = '';
    inputText.value = '';
    tasks.forEach((item) => {
        container.appendChild(item);
    })
}


