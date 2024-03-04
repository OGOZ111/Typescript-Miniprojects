export function getNumberOfChars(name: string) {
  return name.length;
  // number of characters in: name
}

export function getFirstChar(name: string) {
  return name[0];
  // first character of: name
}

export function getLastChar(name: string) {
  return name[name.length - 1];
  // last character of: name
}

export function getLower(name: string) {
  return name.toLowerCase();
  // name all in lower case (example: "ABC" becomes "abc")
}

export function getUpper(name: string) {
  return name.toUpperCase();
  // name all in upper case (example: "abc" becomes "ABC")
}
