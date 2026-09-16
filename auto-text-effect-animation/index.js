const containerEl = document.querySelector('.container');

const careers = ["YouTuber", "Web Developer", "Freelancer", "Instructor"];

let careerIndex = 0;
let characterIndex = 1;

function updateText() {
    const currentCareer = careers[careerIndex];
    const prefix = currentCareer.startsWith('I') ? 'an' : 'a';
    const visibleText = currentCareer.slice(0, characterIndex);

    containerEl.innerHTML = `<h1>I am ${prefix} ${visibleText}</h1>`;

    characterIndex++;

    if (characterIndex > currentCareer.length) {
        characterIndex = 1;
        careerIndex = (careerIndex + 1) % careers.length;
    }
}

setInterval(updateText, 200);