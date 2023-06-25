// Kebabize

// DESCRIPTION:
// Modify the kebabize function so that it converts a camel case string into a kebab case.

// "camelsHaveThreeHumps"  -->  "camels-have-three-humps"
// "camelsHave3Humps"  -->  "camels-have-humps"
// "CAMEL"  -->  "c-a-m-e-l"
// Notes:

// the returned string should only contain lowercase letters

// - FUNDAMENTALS,
// - STRINGS,
// - REGULAR EXPRESSIONS

//1 Solution:

function kebabize(str) {
    var nonumber = str.replace(/\d/g, '').split(/(?=[A-Z])/g);
    return nonumber.join('-').toLowerCase();
}

//2 Solution:

function kebabize(str) {
    return str.replace(/([A-Z])/g, "-$1")
              .toLowerCase()
              .replace(/[0-9]/g, "")
              .replace(/^-/, "");
}  