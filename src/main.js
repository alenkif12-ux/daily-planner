import './styles/main.scss';

const addBtn = document.querySelector('.add-btn');
const headerInput = document.querySelector('.header-input');
const taskList = document.querySelector('.task-list');

const tasks = [];

const addTasks = (task) => {
  if (task.value.trim() === '') {
    return 'Error';
  } else {
    const newTask = {
      id: Date.now(),
      text: task.value.trim(),
      completed: false
};

tasks.push(newTask);
task.value = '';
renderTasks();
  }
}

const renderTasks = () => {
  taskList.innerHTML = '';
  const tasksHTML = tasks.map((task) => {
    return `<li class="${task.completed ? 'completed' : ''}">
    ${task.text}
    <button class="complete-btn data-id="${task.id}">Done</button>
    <button class="delete-btn data-id="${task.id}">Delete</button>
    </li>`
  });
   taskList.innerHTML = tasksHTML.join('');
}

addBtn.addEventListener('click', () => {
  addTasks(headerInput);
});

taskList.addEventListener('click', (event) => {
  const taskId = Number(event.target.dataset.id);

  if (event.target.classList.contains('complete-btn')) {
    const task = tasks.find((task) => task.id === taskId);
    task.completed = !task.completed;
  }

  if (event.target.classList.contains('delete-btn')) {
    const taskIndex = tasks.findIndex((task) => task.id === taskId);
    tasks.splice(taskIndex, 1);
  }

  renderTasks();
});