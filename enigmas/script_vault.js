document.addEventListener("DOMContentLoaded", () => {
    const hiddenLetters = document.querySelectorAll(".hidden-letter");
    const progressBar = document.getElementById("collectedLetters");
    const successMessage = document.getElementById("successMessage");
    const targetWord = "database".split(""); // Mot cible sous forme de tableau
    let currentIndex = 0; // Index actuel dans le mot cible

    hiddenLetters.forEach((letter) => {
        letter.addEventListener("click", () => {
            const letterValue = letter.getAttribute("data-letter");

            // Vérifie si la lettre cliquée est la suivante dans l'ordre
            if (letterValue === targetWord[currentIndex]) {
                letter.textContent = letterValue; // Révèle la lettre
                letter.classList.add("revealed"); // Empêche de recliquer
                letter.classList.remove("hidden-letter");

                // Ajoute la lettre au progrès
                updateProgress(letterValue);
                currentIndex++; // Passe à la lettre suivante

                // Si toutes les lettres sont collectées
                if (currentIndex === targetWord.length) {
                    revealSuccessMessage();
                }
            } else {
                alert("Incorrect letter! Follow the correct order.");
            }
        });
    });

    function updateProgress(letter) {
        progressBar.textContent += letter.toUpperCase();
    }

    function revealSuccessMessage() {
        successMessage.classList.remove("hidden");
    }
});