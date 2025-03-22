// Your code here
document.addEventListener("DOMContentLoaded", () => {
    const characterBar = document.getElementById("character-bar")
})

function fetchCharacters() {
 fetch("http://localhost:3000/characters")
 .then(response => response.json)
 .then(characters => {
    characters.forEach(addCharacterToBar)
 })

}

function addCharacterToBar(character) {
    const span = document.createElement("span");
    span.textContent = character.name;
    span.addEventListener("click", () => displayCharacter(character));
    characterBar.appendChild(span);
}

function displayCharacter(character) {
    currentCharacter = character;
    characterName.textContent = character.name;
    characterImage.src = character.image;
    characterVotes.textContent = character.votes;
}