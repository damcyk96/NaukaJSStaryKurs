const removeTask = (e) => {
    e.target.parentNode.style.textDecoration = "line-through";
}

document.querySelectorAll(`li button`).forEach( item => {
    item.addEventListener('click', removeTask)
})