// Format words into a sentence

// DESCRIPTION:
// Complete the method so that it formats the words into a single comma separated value. The last word should be separated by the word 'and' instead of a comma. The method takes in an array of strings and returns a single formatted string.

// Note:

// Empty string values should be ignored.
// Empty arrays or null/nil/None values being passed into the method should result in an empty string being returned.
// Example: (Input --> output)

// ['ninja', 'samurai', 'ronin'] --> "ninja, samurai and ronin"
// ['ninja', '', 'ronin'] --> "ninja and ronin"
// [] -->""

// - STRINGS,
// - ALGORITHMS

function formatWords(words){
    if (!words) return '';
    words = words.filter(i => i.length > 0);
    if (words.length === 0) return '';
    if (words.length === 1) return words[0];
    return words.slice(0,-1).join(', ') + ' and ' + words.slice(-1);
}