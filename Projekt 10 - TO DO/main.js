const removeTask = (e) => {
    const index = e.target.dataset.key;
    document.querySelector(`li[data-key="${index}"]`).remove()

}

document.querySelectorAll(`li button`).forEach( item => {
    item.addEventListener('click', removeTask)
})

authorizationtest