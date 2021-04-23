const taskNameArea = document.querySelector('#taskName');
const tasksArea = document.querySelector('#tasks');
const addTaskBtn = document.querySelector('#addBtn');

addBtn.addEventListener('click', function() {
    let description = taskNameArea.value;

    let para = createParagraph(description).textContent;

    let result = createContainer(para);

    alert(para);
});

function createContainer(paragraph) {
    let div = document.createElement('div');
    div.className = 'task-item';
    div.insertAdjacentHTML('beforeEnd', paragraph);

    let btns = createContainerForBtn();
    div.insertAdjacentElement('beforeEnd', '${btns}');

    return div;
}

function createContainerForBtn() {
    let div = document.createElement('div');
    div.className = 'items';

    let successBtn = createBtn('btn btn-success');
    let failedBtn = createBtn('btn btn-danger');

    div.insertAdjacentElement('beforeEnd', '${successBtn} ${failedBtn}');

    return div;
}

function createBtn(classBtn) {
    let button = document.createElement('button');

    if (classBtn === '') {
        button.className = 'btn btn-success';
        button.textContent = 'Completed';
    } else if (classBtn === 'btn btn-danger') {
        button.className = 'btn btn-danger';
        button.textContent = 'Failed';
    } else {
        button.className = 'btn btn-secondary';
        button.textContent = 'Not known';
    }

    return button;
}

function createParagraph(taskDescription) {
    let paragraph = document.createElement('p');
    paragraph.textContent = taskDescription;
    paragraph.className = 'task-text';

    return paragraph;
}

// function wrapButtons() {
//     let div = document.createElement('div');
//     div.className = 'flex-container';

//     let successBtn = createBtn('btn btn-success');
//     let failedBtn = createBtn('btn btn-danger');

//     div.innerHTML = `${successBtn} ${failedBtn}`;
// }

// function createResDiv(task, divContainer) {
//     let div = document.createElement('div');
//     div.className = '';
//     div.innerText = task;

//     div.insertAdjacentHTML('beforeend', '<button type="submit" class="btn btn-success">Completed</button>');

//     tasksArea.append(div);
// }

// function createSuccessBtn() {
//     let button = document.createElement('button');
//     button.className = 'btn btn-outline-success';
//     button.innerText = 'Completed';
// }

// function createFailedBtn() {
//     let button = document.createElement('button');
//     button.className = 'btn btn-outline-success';
//     button.innerText = 'Completed';
// }

// function createBtn(className) {
//     let button = document.createElement('button');
//     button.className = className;

//     if (className === 'btn btn-success') {
//         button.innerText = 'Completed';
//     } else {
//         button.innerText = 'Failed';
//     }
// }