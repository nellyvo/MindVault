function showChapterDetails(id) {
    document.querySelectorAll('.story-chapter').forEach(chapter => chapter.classList.add('hidden'));
    document.getElementById(id).classList.remove('hidden');
}

function hideDetails(id) {
    document.getElementById(id).classList.add('hidden');
}

const characterDetails = {
    aiden: {
        name: "Aiden 'Cipher' Hayes",
        description: "A skilled hacker determined to uncover the truth behind the government's manipulation of memories."
    },
    ava: {
        name: "Ava 'Ghost' Carter",
        description: "A mysterious ally with a personal vendetta against the regime."
    },
    marcus: {
        name: "Marcus Royce",
        description: "A conflicted enforcer torn between loyalty and his conscience."
    }
};

function showCharacterDetails(character) {
    const details = characterDetails[character];
    document.getElementById('character-name').innerText = details.name;
    document.getElementById('character-description').innerText = details.description;
    document.getElementById('character-modal').classList.add('show');
}

function hideCharacterModal() {
    document.getElementById('character-modal').classList.remove('show');
}

// Highlight characters as they appear in the viewport
const characters = document.querySelectorAll('.character-card');

function handleScroll() {
    characters.forEach((card) => {
        const rect = card.getBoundingClientRect();
        if (rect.left >= 0 && rect.right <= window.innerWidth) {
            card.style.transform = 'scale(1.1)';
            card.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.5)';
        } else {
            card.style.transform = 'scale(1)';
            card.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.3)';
        }
    });
}

// Attach scroll event listener
document.querySelector('.character-slider').addEventListener('scroll', handleScroll);

