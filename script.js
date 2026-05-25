function firstWord(str) {
    // Trim leading spaces
    str = str.trim();

    // If string is empty, return empty string
    if (str === "") return "";

    // Find first space
    let index = str.indexOf(" ");

    // If no space found, return entire string
    if (index === -1) return str;

    // Return substring till first space
    return str.substring(0, index);
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
