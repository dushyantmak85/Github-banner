// Binary for: I love Disha Sonawat
const binaryMessage = "01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000100 01101001 01110011 01101000 01100001 00100000 01010011 01101111 01101110 01100001 01110111 01100001 01110100";

// Convert to array of chars
const binaryChars = binaryMessage.replace(/\s/g, "").split(""); // remove spaces
const binaryStream = document.getElementById("binaryStream");

// Render binary digits in spans
binaryChars.forEach((bit, index) => {
  const span = document.createElement("span");
  span.className = "binary-char";
  span.dataset.index = index;
  span.textContent = bit;
  binaryStream.appendChild(span);
});

// Flip bits randomly for animation
setInterval(() => {
  const spans = document.querySelectorAll(".binary-char");
  spans.forEach(span => {
    if (Math.random() < 0.1) { // 10% chance each tick
      span.textContent = span.textContent === "0" ? "1" : "0";
    }
  });
}, 100);
