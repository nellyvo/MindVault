document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("quizForm");
    const resultDiv = document.getElementById("result");
    const scrambledLettersSpan = document.getElementById("scrambledLetters");
    const passwordInput = document.getElementById("passwordInput");
    const checkPasswordButton = document.getElementById("checkPassword");
    const successMessage = document.getElementById("successMessage");
    const avaSecretContainer = document.getElementById("avaSecretContainer");
    const secretText = document.getElementById("secretText");
    const audio = document.getElementById("revealAudio");

    // Réponses du quiz
    const correctOrder = ["m", "e", "m", "o", "r", "y"];

    // Formulaire de quiz
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const answers = Array.from(new FormData(form).values());
        const isCorrect = answers.join("") === correctOrder.join("");

        if (isCorrect) {
            // Mélange les lettres
            const scrambled = correctOrder
                .sort(() => Math.random() - 0.5)
                .join(" ");
            scrambledLettersSpan.textContent = scrambled;
            resultDiv.classList.remove("hidden");
        } else {
            alert("Some answers are incorrect. Try again!");
        }
    });

    // Vérification du mot de passe
    checkPasswordButton.addEventListener("click", () => {
        const password = passwordInput.value.trim().toLowerCase();
        if (password === "memory") {
            successMessage.classList.remove("hidden");
            revealSecret(); // Affiche le titre et le texte
        } else {
            alert("Incorrect password. Try again!");
        }
    });

    // Révélation du secret
    function revealSecret() {
        audio.play(); // Joue l'effet sonore
        avaSecretContainer.classList.remove("hidden");

        // Animation de fond lumineux
        document.body.classList.add("reveal-background");

        // Texte à révéler
        const secret = `Ava worked tirelessly for the Mind Vault project. Her goal was to eliminate trauma and advance 
        the project for humanity's benefit. But she uncovered a sinister truth: the government wanted to misuse the 
        technology. To silence her, they erased her memory.`;

        secretText.textContent = ""; // Réinitialise le texte
        const words = secret.split(" ");
        let index = 0;

        const interval = setInterval(() => {
            if (index < words.length) {
                secretText.textContent += words[index] + " ";
                index++;
            } else {
                clearInterval(interval); // Fin de l'animation
            }
        }, 100); // Chaque mot apparaît toutes les 100ms

        // Supprime l'effet de fond lumineux après 5 secondes
        setTimeout(() => {
            document.body.classList.remove("reveal-background");
        }, 5000);
    }
});