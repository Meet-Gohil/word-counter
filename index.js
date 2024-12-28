const textbox = document.getElementById("textbox");
const charCount = document.getElementById("char");
const wordCount = document.getElementById("word");

function updateCounts() {
  const text = textbox.value;
  charCount.textContent = text.length;

  // Count words
  const words = text.trim().split(/\s+/).filter(word => word !== "");
  wordCount.textContent = words.length;
}

textbox.addEventListener("input", updateCounts);