let year = prompt("Please insert the year you were born");
let convertToNum = parseInt(year);
let zodiacSignResult = (convertToNum - 4) % 12;

if (Number.isNaN(convertToNum)) {
    alert("Some of the character(s) you have entered is not valid. Only digits [0-9] are allowed.");
} else {
    if (zodiacSignResult === 0) {
        alert(`${convertToNum} is the year of the Rat according to the Chinese zodiac.`);
    } else if (zodiacSignResult === 1) {
        alert(`${convertToNum} is the year of the Ox according to the Chinese zodiac.`);
    } else if (zodiacSignResult === 2) {
        alert(`${convertToNum} is the year of the Tiger according to the Chinese zodiac.`);
    } else if (zodiacSignResult === 3) {
        alert(`${convertToNum} is the year of the Rabbit according to the Chinese zodiac.`);
    } else if (zodiacSignResult === 4) {
        alert(`${convertToNum} is the year of the Dragon according to the Chinese zodiac.`);
    } else if (zodiacSignResult === 5) {
        alert(`${convertToNum} is the year of the Snake according to the Chinese zodiac.`);
    } else if (zodiacSignResult === 6) {
        alert(`${convertToNum} is the year of the Horse according to the Chinese zodiac.`);
    } else if (zodiacSignResult === 7) {
        alert(`${convertToNum} is the year of the Goat according to the Chinese zodiac.`);
    } else if (zodiacSignResult === 8) {
        alert(`${convertToNum} is the year of the Monkey according to the Chinese zodiac.`);
    } else if (zodiacSignResult === 9) {
        alert(`${convertToNum} is the year of the Rooster according to the Chinese zodiac.`);
    } else if (zodiacSignResult === 10) {
        alert(`${convertToNum} is the year of the Dog according to the Chinese zodiac.`);
    } else if (zodiacSignResult === 11) {
        alert(`${convertToNum} is the year of the Pig according to the Chinese zodiac.`);
    } else {
        alert(`An error has occured. Please try again later`);
    }
}