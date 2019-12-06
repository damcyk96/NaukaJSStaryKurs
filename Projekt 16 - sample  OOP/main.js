const input = document.querySelector(`input`);
const searchInput = document.querySelector(`#searchBox`);
const ul = document.querySelector("ul");
const form = document.querySelector('form');
const taskNumber = document.querySelector('h1 span');
const listItems = document.getElementsByClassName("task");

const toDoList = [];

const renderList = () =>
{
    ul.textContent = "";
    toDoList.forEach((toDoElement, key) => {
        toDoElement.dataset.key = key;
        ul.appendChild(toDoElement);
    })
}

const removeTask = e => {
    const index = e.target.parentNode.dataset.key;
    toDoList.splice(index, 1)
    taskNumber.textContent = listItems.length;
    renderList();
  };

const addTask = (e) =>  {
    e.preventDefault()
    const titleTask = input.value;
    if(titleTask === "") return;
    const newTask = document.createElement('li');
    newTask.className = 'task';
    newTask.innerHTML = titleTask + `<button>Usuń</button>`;
    toDoList.push(newTask);
    renderList();
    ul.appendChild(newTask);
    input.value = "";
    const liItems = listItems.length;
    taskNumber.textContent = liItems;
    newTask.querySelector(`button`).addEventListener('click', removeTask)

}
form.addEventListener('submit', addTask)

const searchTask = e => {
  const searchText = e.target.value.toLowerCase();
  let tasks = [...listItems];
  tasks = tasks.filter(li => li.textContent.toLowerCase().includes(searchText));
  ul.textContent = "";
  tasks.forEach(li => ul.appendChild(li));
};

searchInput.addEventListener("input", searchTask);



document.querySelectorAll(`li button`).forEach(item => {
  item.addEventListener("click", removeTask);
});
