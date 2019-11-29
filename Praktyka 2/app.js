const btn = document.querySelector("button");
const list = document.querySelector("ul");

let number = 1;
const addElement = () => {
  const newLi = document.createElement("li");
  if( number % 3 == 0)
  {
      newLi.classList.add("bigLi");
  }
  list.appendChild(newLi);
  newLi.textContent = number;
  number++;
};

btn.addEventListener("click", addElement);
