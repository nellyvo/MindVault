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
    const secret =
        `Ava's past is not only linked to the Mind Vault, it's an integral part of its creation. 
        But as Hayden reassembles the fragments, another truth emerges that changes everything. 
        Memories reveal that Ava's involvement stopped the moment she realized the system was being armed. 
        Her attempts to stop it led to her own downfall, as the government erased her memories to ensure her silence.`;

    // Réinitialisation du texte
    secretText.textContent = ""; // Utilise correctement l'élément DOM ici
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