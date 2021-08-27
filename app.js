const p = document.querySelectorAll("p");
const wrapper = document.querySelectorAll(".wrapper");
let dragItem = null;

for (const item of p) {
  item.addEventListener("dragstart", dragStart);
  item.addEventListener("dragend", dragEnd);
  item.addEventListener("dblclick", editable);
}

function dragStart() {
  dragItem = this;
  setTimeout(() => {
    this.style.display = "none";
  }, 0);
}

function dragEnd() {
  setTimeout(() => {
    this.style.display = "block";
  }, 0);
}

function editable() {
  this.classList.toggle("edit");
  this.setAttribute("contenteditable", true);
  if (!this.classList.contains("edit")) {
    this.removeAttribute("contenteditable");
  }
}

for (const w of wrapper) {
  w.addEventListener("dragover", dragOver);
  w.addEventListener("dragenter", dragEnter);
  w.addEventListener("dragleave", dragLeave);
  w.addEventListener("drop", dropItem);
}

function dragOver(e) {
  e.preventDefault();
  this.style.border = "2px solid cyan";
}

function dragEnter(e) {
  e.preventDefault();
}
function dragLeave() {
  this.style.border = "none";
}

function dropItem() {
  this.append(dragItem);
}
