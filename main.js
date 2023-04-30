// let button = document.getElementById("read");

// button.addEventListener("click", () => {
//   document.querySelectorAll(".single-box").forEach((e) => {
//     e.classList.remove("unseen");
//   });

//   document.querySelectorAll(".dot").forEach((e) => {
//     e.classList.remove("dot");
//   });

//   document.getElementById('num').innerText = "0";
// });

// Get the button element with the id "read"
const button = document.getElementById("read");

// Attach a click event listener to the button
button.addEventListener("click", () => {
  // Get all elements with the class "single-box"
  const singleBoxes = document.querySelectorAll(".single-box");

  // Loop through each single-box element and remove the class "unseen"
  singleBoxes.forEach((box) => {
    box.classList.remove("unseen");
  });

  // Get all elements with the class "dot"
  const dots = document.querySelectorAll(".dot");

  // Loop through each dot element and remove the class "dot"
  dots.forEach((dot) => {
    dot.classList.remove("dot");
  });

  // Update the text of the element with the id "num" to "0"
  document.getElementById("num").innerText = "0";
});
