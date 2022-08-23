document.querySelectorAll("div").forEach((div) => {
  div.addEventListener("mouseenter", () => {
    div.style.transform = `translate(${Math.random() * 100}vw, ${
      Math.random() * 100
    }vh)`;
    div.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 70%)`;
  });
});
setInterval(() => {
  document.querySelectorAll("div").forEach((div) => {
    div.style.transform = `translate(${Math.random() * 100}vw, ${
      Math.random() * 100
    }vh)`;
    div.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 70%)`;
  });
}, 5000);
