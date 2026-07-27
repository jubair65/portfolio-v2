export const HERO_TEXT_CHARACTERS = "Jubair Bin Hasan".split('').map((char, index) => ({
  id: index + 1,
  text: char,
  replaceText: char === ' ' ? '\u00A0' : char
}));
