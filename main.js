let accept = document.querySelector("#yes");
let reject = document.querySelector("#no");

const sayYes = () => {
  let boxSize = document.querySelector("#box");

  boxSize.innerHTML = `<div class="accepted"><h1> hurrahhh !! </h1>
    <p> Let's get married now.</p>
    </div>`;
  ask.innerHTML = "";
  //   accept.setAttribute("hidden", "true");
  //   no.setAttribute("hidden", "true");
};

const sayNo = () => {
  let boxSize = document.querySelector("#box");
  let currentWidth = boxSize.offsetWidth;
  let currentHeight = boxSize.offsetHeight;

  let newWidth = currentWidth * 1.1;
  let newHeight = currentHeight * 1.1;

  // converting tp px

  boxSize.style.width = newWidth + `px`;
  boxSize.style.height = newHeight + `px`;
};

reject.addEventListener("click", sayNo);

accept.addEventListener("click", sayYes);
