// Typing animation
const text = "Machine Learning • Healthcare AI • Research";
let i = 0;
const speed = 80;

function typing() {
  if (i < text.length) {
    document.getElementById("typingText").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, speed);
  }
}
typing();

// Dark / Light Toggle
document.getElementById("themeToggle").onclick = () => {
  document.body.classList.toggle("light");
};
