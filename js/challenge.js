// deliverable #1
let timerRunning = true,
  timer = function () {
    return setInterval(function () {
      countInteger = parseInt(count.innerText);
      count.innerText = countInteger + 1;
      // console.log(count.innerText)
    }, 1000);
  };

// etc.
interval = timer();
const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
const heart = document.getElementById("heart");
const pause = document.getElementById("pause");
const form = document.getElementById("comment-form");
const submit = document.getElementById("submit");
const count = document.getElementById("counter");
const greyOut = [minus, plus, heart, submit];

// deliverable #2
minus.addEventListener("click", function () {
  countInteger = parseInt(count.innerText);
  count.innerText = countInteger - 1;
});

plus.addEventListener("click", function () {
  countInteger = parseInt(count.innerText);
  count.innerText = countInteger + 1;
});

// deliverable #3

// click counter
let likeCount = 0;

// add like
function addLike() {
  likeCount += 1;
  const newLike = document.createElement("li");

  if (likeCount = 0) {
    newLike.innerHTML =
      parseInt(count.innerText) +
      " has been liked <span>" +
      (likeCount + 1) +
      "</span> times";
  } else {
    newLike.innerHTML =
      parseInt(count.innerText) + " has been liked <span>1</span> time";

    document.querySelector(".likes").append(newLike);
  }
  // forEach???? or some kind of for loop
  // do i need to make an array for every number on the counter?
  // feels like yes
  // im so smart you have to do a for while loop
}

heart.addEventListener("click", addLike);

// deliverables #4 & 5
pause.addEventListener("click", function () {
  timerRunning
    ? ((timerRunning = false),
      clearInterval(interval),
      (pause.innerText = "resume"))
    : ((timerRunning = true),
      (interval = timer()),
      (pause.innerText = "pause"));
  greyOut.forEach(function (btn) {
    btn.disabled = !timerRunning;
  });
});

// deliverable #6
function addComment() {
  const item = document.createElement("p");
  item.textContent = newComment;
  document.getElementById("list").append(item);
}

function submitComment(event) {
  event.preventDefault();
  newComment = document.getElementById("comment-input").value;
  addComment(newComment);
  event.target.reset();
}

form.addEventListener("submit", submitComment);
