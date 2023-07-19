const task = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTask');
const taskListOl = document.getElementById('taskList');

addTaskButton.addEventListener('click', addTask)


function addTask() {
// Метод trim убирает лишние пробелы в начале и в конце строки
const taskName = task.value.trim();
task.value = '';
if(taskName) {
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.textContent=`${taskName}`;
    //li.innerHTML = `<span></span>`;
    li.appendChild(span);

    const completedButton = document.createElement('button');
    completedButton.textContent = 'Done';
    completedButton.classList.add('btn-done');
    completedButton.addEventListener('click', ()=> {li.classList.add('done')});
    li.appendChild(completedButton);
    taskListOl.append(li);

    const takeButton = document.createElement('button');
    takeButton.textContent = 'Take';
    takeButton.classList.add('btn-take');
    takeButton.addEventListener('click', ()=> {li.classList.add('take')});

    completedButton.addEventListener('click', () => {
        if(li.classList.contains('done')){
            li.appendChild(takeButton);
            taskListOl.append(li);
            li.classList.remove('btn-done')
        } else {
            if(li.classList.contains('take')){
            li.appendChild(completedButton);
            taskListOl.append(li);
            //li.classList.add('btn-done');
            li.classList.remove('btn-take');
        };
        }
    })
}
}
 