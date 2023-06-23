const input = document.querySelector("input");
const btn = document.querySelector(".addtask > button");

btn.addEventListener("click", addlist);
input.addEventListener("keyup", (e) => {
  e.keyCode === 13 ? addlist(e) : null;
});

btn.addEventListener("click", addlist);

function addlist(e) {
  const notcomplete = document.querySelector(".notcomplete");
  const complete = document.querySelector(".complete");

  const newli = document.createElement("li");
  const checkBtn = document.createElement("button");
  const delbtn = document.createElement("button");

  checkBtn.innerHTML = '<i class="fa fa-check"></i>';
  delbtn.innerHTML = '<i class="fa fa-trash"></i>';

  if (input.value !== "") {
    newli.textContent = input.value;
    input.value = "";
    notcomplete.appendChild(newli);
    newli.appendChild(checkBtn);
    newli.appendChild(delbtn);
  }

  checkBtn.addEventListener("click", function () {
    const parent = this.parentNode;
    parent.remove();
    complete.appendChild(parent);
    checkBtn.style.display = "none";
  });
  delbtn.addEventListener("click", function () {
    const parent = this.parentNode;
    parent.remove();
  });
}
