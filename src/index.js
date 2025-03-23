// Your code here
document.addEventListener("DOMContentLoaded", () => {
    const characterBar = document.getElementById("character-bar");
    const detailedInfo = document.getElementById("detailed-info");
    const characterName = document.getElementById("name");
    const characterImage = document.getElementById("image");
    const voteCountElement = document.getElementById("vote-count");
    const votesForm = document.getElementById("votes-form");
    const voteInput = document.getElementById("votes");
    const resetVotesButton = document.getElementById("reset-btn");
    const characterForm = document.getElementById("character-form");
    const newCharacterName = document.getElementById("name");
    const newCharacterImage = document.getElementById("image-url");
    let selectedCharacter = null;

    
    fetch("http://localhost:3000/characters")
    .then(response => response.json())
    .then(characters => {
    characters.forEach(character => addCharacterToBar(character));
});

function addCharacterToBar(character) {
    const span = document.createElement("span");
    span.textContent = character.name;
    span.addEventListener("click", () => displayCharacterDetails(character));
    characterBar.appendChild(span);
}

function displayCharacterDetails(character) {
    selectedCharacter = character;
    characterName.textContent = character.name;
    characterImage.src = character.image;
    characterImage.alt = character.name;
    voteCountElement.textContent = character.votes;
 }

votesForm.addEventListener("submit", (event) => {
    event.preventDefault();
      

    const additionalVotes = parseInt(voteInput.value) || 0;
    const currentVotes = parseInt(voteCountElement.textContent);
    voteCountElement.textContent = currentVotes + additionalVotes;
    voteInput.value = "";
});

    
resetVotesButton.addEventListener("click", () => {
    if (!selectedCharacter) return;
    voteCountElement.textContent = "0";
});

    
if (characterForm) {
    characterForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = newCharacterName.value.trim();
    const image = newCharacterImage.value.trim();
    if (!name || !image) return;

    const newCharacter = {  name, image, votes: 0 };
    addCharacterToBar(newCharacter);
    displayCharacterDetails(newCharacter);
    characterForm.reset();
        });
    }
});