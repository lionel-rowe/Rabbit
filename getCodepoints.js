{

const getCodePoints = (str) => Array.from(str).map(el => {
  return {char: el, code: el.codePointAt().toString(16)};
});


console.log('Zawgyi:', getCodePoints('ခ်္'));
console.log('Broken:', getCodePoints('ချ်'));
console.log('Fixed:', getCodePoints('ခ်ျ'));

}
