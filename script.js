function typeWriterEffect(text, elementId, speed) {
    let i = 0;
    const element = document.getElementById(elementId);
    element.innerHTML = "";
  
    function type() {
      if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(type, speed);
      }
    }
    type();
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    typeWriterEffect("Welcome to the Future", "typewriter", 80);
  });

