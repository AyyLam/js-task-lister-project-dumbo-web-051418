document.addEventListener('DOMContentLoaded', () => {
  // your solution here
  // grab DOM elements

  const listDiv = document.getElementById("app-content");
  const listTitle = document.querySelector('#new-list-title')
  const listForm = document.getElementById('create-list-form')

  const taskForm = document.querySelector('#create-task-form')
  const taskDescription = document.querySelector('#new-task-description')
  const taskPriority = document.querySelector('#new-task-priority')


  const app = new TaskLister();

  function createList() {
      const title = listTitle.value
      const listPresent = document.querySelector('#lists')
      if (!listPresent){
        const list = document.createElement('div')
        list.setAttribute("id", "lists");
        listDiv.appendChild(list)
      }

      let listContent = `
      <div>
        <h2 id="${title}">${title}
          <button data-title="${title}" class="delete-list">
            X
          </button>
        </h2>
        <ul>
        </ul>
      </div>`
      listPresent.innerHTML += listContent

     let parentList = document.querySelector('#parent-list')
     parentList.innerHTML += `<option value="${title}">${title}</option>`
  }

  function addTaskForm() {
    let taskForm = document.querySelector('#create-task-form')
    if (!taskForm) {
      let taskContentForm = `
    <form id="create-task-form">
      <label for="parent-list">Select List:</label>
      <select id="parent-list">

      <label for="new-task-description">Task description:</label>
      <input required type="text" id="new-task-description" placeholder="description">

      <label for="new-task-priority">Priority level:</label>
      <input type="text" id="new-task-priority" placeholder="priority">
      <input type="submit" value="Create New Task">
    </form>`
  listDiv.innerHTML += taskContentForm
    }
  }

  function addTask() {
    let parentList = document.querySelector('#parent-list')
    let selectedListValue = null
    let currList = parentList.children
    for (let i = 0; i < currList.length; i++){
        if (currList[i].selected === true) {
          let selectedListValue = currList[i].value
          break;
        }
    }

    let currentTaskList = document.querySelector('#'+ `${selectedListValue}`)


    const descrip = taskDescription.value
    const priority = taskPriority.value

    let taskContent = `
      <li>
        Task: ${descrip}
        <button data-list-title="chik fil a" data-task-name="${descrip}" class="delete-task">
          X
        </button>
        <br>
        Priority: ${priority}
      </li>
      `
    currentTaskList.innerHTML += (taskContent)
  }


  listForm.addEventListener('submit', (e) => {
    e.preventDefault()
    addTaskForm()
    createList()
  })

  taskForm.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log('hi')
    addTask()
  })

});
