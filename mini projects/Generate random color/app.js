let btn = document.querySelector("button");

btn.addEventListener("click", function () {
  div = document.querySelector("div");
  div.style.backgroundColor = getRandomColor();
  div.innerText = `new color ${getRandomColor()}`;
});

getRandomColor = function () {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);
  return `rgb(${red}, ${green}, ${blue})`;
};
