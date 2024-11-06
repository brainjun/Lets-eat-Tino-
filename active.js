const bottomDiv = document.getElementById("bottomDiv");
let startY;
let isSwiping = false;
let isHalfScreen = false;

function toggleHalfScreen() {
  if (!isHalfScreen) {
    bottomDiv.classList.add("half-screen");
    isHalfScreen = true;
  }
}

function startSwipe(event) {
  if (!isHalfScreen) return;
  isSwiping = true;
  startY = event.touches ? event.touches[0].clientY : event.clientY;
  bottomDiv.style.transition = "none";
}

function handleSwipe(event) {
  if (!isSwiping) return;
  const currentY = event.touches ? event.touches[0].clientY : event.clientY;
  const swipeDistance = startY - currentY;

  if (swipeDistance > 100) {
    window.location.href = "explanation.html"; // Redirect to new file
    isSwiping = false;
  }
}

function endSwipe() {
  isSwiping = false;
}

bottomDiv.addEventListener("click", toggleHalfScreen);
bottomDiv.addEventListener("touchstart", startSwipe);
bottomDiv.addEventListener("touchmove", handleSwipe);
bottomDiv.addEventListener("touchend", endSwipe);
bottomDiv.addEventListener("mousedown", startSwipe);
document.addEventListener("mousemove", handleSwipe);
document.addEventListener("mouseup", endSwipe);
