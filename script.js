var r = document.querySelector(':root');
const button = document.querySelector(".toggle-btn");
button.addEventListener("click", toggle);

if (localStorage.getItem("bg") === null && localStorage.getItem("fg") === null) {
  bg = rs.getPropertyValue('--bg');
  fg = rs.getPropertyValue('--fg');
} else {
  bg = localStorage.getItem("bg");
  fg = localStorage.getItem("fg");
  load();
}

function toggle() {
  var t = document.querySelector(".toggle");
  var rs = getComputedStyle(r);
  bg = rs.getPropertyValue('--bg');
  fg = rs.getPropertyValue('--fg');
  r.style.setProperty('--bg', fg);
  r.style.setProperty('--fg', bg);
  localStorage.setItem("bg", fg);
  localStorage.setItem("fg", bg);
  t.classList.add("toggled");
  t.addEventListener('transitionend', function() {
    t.classList.remove("toggled");
  })
}

function load() {
  r.style.setProperty('--bg', bg);
  r.style.setProperty('--fg', fg);
}
