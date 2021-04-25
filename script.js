const taskName = document.querySelector('#taskName');
const addButton = document.querySelector('#addBtn');
const result = document.querySelector('#result');
let tasksToDo = [];

addButton.addEventListener('click', function(event) {
    tasksToDo.length = 0;
    let task = taskName.value;

    tasksToDo.push(task);

    let btnSuccess = createBtnSuccess(), btnFailed = createBtnFailed();

    let div = document.createElement('div');
    div.className = 'divBtns';
    div.append(btnSuccess);
    div.append(btnFailed);

    for (let index = 0; index < tasksToDo.length; index++) {
        let li = document.createElement('li');
        li.innerHTML = `<div>${tasksToDo[index]}</div>`;
        li.append(div);
        result.append(li);
    }

    taskName.value = '';

    btnSuccess.addEventListener('click', function(event) {
        alert(this.parentElement.parentElement.tagName);
        this.parentElement.parentElement.remove();
    });
});

function createParagraph(content) {
    let paragraph = document.createElement('p');
    paragraph.textContent = content;
    paragraph.className = 'task-text';

    return paragraph;
}

function createDiv(classNamE) {
    let div = document.createElement('div');
    div.className = classNamE;

    return div;
}

function createBtnSuccess() {
    let btnSuccess = document.createElement('button');
    btnSuccess.className = 'btn btn-success completed';
    btnSuccess.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">
        <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
    </svg>`;

    return btnSuccess;
}

function createBtnFailed() {
    let btnFailed = document.createElement('button');
    btnFailed.className = 'btn btn-danger deleted';
    btnFailed.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
    </svg>
    `;

    return btnFailed;
}
