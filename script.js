
const inputForTask = document.querySelector('#taskId'),
    addBtn = document.querySelector('#addTask');

addBtn.addEventListener('click', function() {
    let inputValue = inputForTask.value;

    if (inputValue.length === 0) {
        return;
    } 

    let paragraph = document.createElement('p');
    paragraph.className = 'para';
    paragraph.textContent = inputValue;

    let input = document.createElement('input');
    input.type = 'checkbox';
    input.name = 'Radio';
    input.className = 'Radio';

    let innerDiv = document.createElement('div');
    innerDiv.className = 'innerDiv';
    innerDiv.insertAdjacentElement('afterBegin', paragraph);
    innerDiv.insertAdjacentElement('afterBegin', input);

    input.addEventListener('click', function(event) {
        let nextElement = event.target.nextElementSibling;
        nextElement.classList.toggle('text');
    });

    let button = document.createElement('button');
    button.className = 'deleteBtn';
    button.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
    </svg>`;

    button.addEventListener('click', function(event) {
        button.parentElement.parentElement.remove()
    });

    let divForBtn = document.createElement('div');
    divForBtn.append(button);

    let outerDiv = document.createElement('div');
    outerDiv.className = 'divTask';

    outerDiv.append(innerDiv);
    outerDiv.append(divForBtn);

    document.querySelector('#tasks').append(outerDiv);

    inputForTask.value = '';
});
