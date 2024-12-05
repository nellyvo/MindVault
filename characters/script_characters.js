const characters = {
    aiden: {
        name: "Aiden Hayes",
        description: "A young, intelligent hacker with a strong moral compass, Aiden is driven by a desire to expose the truth, despite the risks. At 24, he’s a technical genius and deeply skeptical of the government’s control over memory technology. His recent discovery of a hidden memory forces him to confront the ethical dilemmas posed by this system.",
        image: "../images/Hayden.jpg"
    },
    ava: {
        name: "Ava Carter",
        description: "Ava is mysterious and highly skilled, familiar with the workings of government systems. She’s motivated by revenge against the government, which erased parts of her memory. While she helps Aiden access secret databases, her trust in him is cautious. Her past and motives add layers of complexity to her character.",
        image: "../images/Ava.jpeg"
    },
    marcus: {
        name: "Marcus Royce",
        description: "As the main antagonist, Marcus is a loyal enforcer of the memory control program. He works from the shadows, maintaining order through intimidation. Throughout the story, he experiences flashes of doubt about his loyalty and the ethics of his actions, adding depth to his character as he hunts Aiden and Ava.",
        image: "../images/Marcus.jpg"
    },
    eleanor: {
        name: "Dr. Eleanor Graves",
        description: "Dr. Eleanor Graves is the brilliant but conflicted scientist who created the Mind Vault system. A visionary in the field of memory preservation, Eleanor conceived the system as a tool for immortalizing humanity's most precious memories. However, her idealistic vision was corrupted by government officials who turned the technology into a weapon of control and manipulation. Over the years, Eleanor has lost her illusions, trapped in the shadow of her own creation. Now under intense scrutiny, she secretly seeks redemption by helping Hayden and Ava in their quest to uncover the truth.",
        image: "../images/Eleanor.jpg"
    },
    ethan: {
        name: "Ethan Cross",
        description: "Ethan Cross is a former government agent who wholeheartedly believed in the mission of the Mind Vault program. Trained to protect its secrets at all costs, Ethan was a loyal enforcer until he discovered the unethical practices hidden beneath the system's façade. Haunted by memories of the atrocities he helped conceal, Ethan turned against the regime, becoming a rogue agent. When introduced to Hayden and Ava, Ethan recognizes Ava as a key figure from the early days of the project. His distrust of her, rooted in his former involvement, creates tension within the group. However, when Hayden discovers the truth about Ava's erased memories, Ethan begins to see her not as an enemy, but as another victim of the system he once served.",
        image: "../images/Ethan.jpg"
    }
    
};

function showCharacterModal(characterKey) {
    const modal = document.getElementById("character-modal");
    const character = characters[characterKey];
    document.getElementById("character-name").textContent = character.name;
    document.getElementById("character-description").textContent = character.description;
    document.getElementById("character-image").src = character.image;

    modal.classList.add("visible");
}

function hideCharacterModal() {
    const modal = document.getElementById("character-modal");
    modal.classList.remove("visible");
}

// Close modal when clicking outside of the modal content
document.getElementById("character-modal").addEventListener("click", function (event) {
    if (event.target === this) {
        hideCharacterModal();
    }
});

const slider = document.querySelector('.slider-container');
let isDown = false;
let startX;
let scrollLeft;

// Mouse Down Event
slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

// Mouse Leave Event
slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
});

// Mouse Up Event
slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
});

// Mouse Move Event
slider.addEventListener('mousemove', (e) => {
    if (!isDown) return; // Arrêter si la souris n'est pas enfoncée
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2; // Ajuster la vitesse de défilement
    slider.scrollLeft = scrollLeft - walk;
});