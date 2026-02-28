document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".cta");

  if (!button) {
    console.log("Button not found");
    return;
  }

  button.addEventListener("click", () => {
    alert("Momentum builds freedom.");
  });
});