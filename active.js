// function growDiv() {
//   const bottomDiv = document.querySelector(".bottom-div");
//   bottomDiv.classList.toggle("grow");
// }
const bottomDiv = document.getElementById("bottomDiv");
let startY;
let isSwiping = false;
let isHalfScreen = false; // Tracks whether div is in half-screen mode

// Function to handle click to expand to half screen
function toggleHalfScreen() {
  if (!isHalfScreen) {
    bottomDiv.classList.add("half-screen"); // Expand to half screen
    isHalfScreen = true;
  }
}

// Function to start swipe detection
function startSwipe(event) {
  if (!isHalfScreen) return; // Only detect swipe if in half-screen mode
  isSwiping = true;
  startY = event.touches ? event.touches[0].clientY : event.clientY;
  bottomDiv.style.transition = "none"; // Disable transition during swipe
}

// Function to handle swipe up
function handleSwipe(event) {
  if (!isSwiping) return;
  const currentY = event.touches ? event.touches[0].clientY : event.clientY;
  const swipeDistance = startY - currentY;

  // If swipe distance exceeds a threshold, navigate to new page
  if (swipeDistance > 100) {
    // Adjust threshold as needed
    window.location.href = "explanation.html"; // Redirect to new file
    isSwiping = false;
  }
}

// Function to end swipe
function endSwipe() {
  isSwiping = false;
}

// Event listeners
bottomDiv.addEventListener("click", toggleHalfScreen);
bottomDiv.addEventListener("touchstart", startSwipe);
bottomDiv.addEventListener("touchmove", handleSwipe);
bottomDiv.addEventListener("touchend", endSwipe);
bottomDiv.addEventListener("mousedown", startSwipe);
document.addEventListener("mousemove", handleSwipe);
document.addEventListener("mouseup", endSwipe);
