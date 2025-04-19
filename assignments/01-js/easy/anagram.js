/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  str1 = str1.toLowerCase().replace(/\s+/g, "");
  str2 = str2.toLowerCase().replace(/\s+/g, "");

  if (str1.length !== str2.length) {
    return false;
  }
  return [...str1].sort().join("") === [...str2].sort().join("");
}

console.log(isAnagram("spar", "rasp"));
console.log(isAnagram("fareeha", "abbas"));

module.exports = isAnagram;
