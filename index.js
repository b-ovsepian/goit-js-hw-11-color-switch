const body = document.querySelector("body");
const startBtn = document.querySelector("button[data-action=start]");
const stopBtn = document.querySelector("button[data-action=stop]");
let switcher;

const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

/*
Напиши скрипт, который после нажатия кнопки Start, раз в секунду 
меняет цвет фона body на случайное значение из массива используя 
инлайн-стиль. При нажатии на кнопку Stop, изменение цвета фона 
должно останавливаться.
*/

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const startSwitch = () => {
  switcher = setInterval(() => {
    const color = randomIntegerFromInterval(0, colors.length - 1);
    body.style.backgroundColor = colors[color];
  }, 1000);
  startBtn.disabled = true;
};

const stopSwitch = () => {
  clearInterval(switcher);
  startBtn.disabled = false;
};

startBtn.addEventListener("click", startSwitch);
stopBtn.addEventListener("click", stopSwitch);
