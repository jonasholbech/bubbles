document.querySelectorAll("div").forEach((div) => {
  div.style.transform = `translate(${Math.random() * 1000}px, ${
    Math.random() * 1000
  }px)`;
  div.style.backgroundColor = `rgb(${Math.random() * 255}, ${
    Math.random() * 255
  }, ${Math.random() * 255})`;
});
