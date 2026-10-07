console.log("Hello World!");
document.addEventListener("DOMContentLoaded", function () {
  console.log("script.js підключено успішно");
  const p = document.createElement("p");
  p.textContent = "Роботу виконала Волохова Злата, КН 3-2";
  document.body.appendChild(p);
});