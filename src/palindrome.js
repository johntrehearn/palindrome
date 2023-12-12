function Palindrome({wordEnt}) {
  let reverseWord = '';
  let word = String(wordEnt).toUpperCase().replace(/\s/g, '');
  console.log('ww', wordEnt);
  for (let i = word.length - 1; i >= 0; i--) {
    console.log(i);
    reverseWord += word[i];
    console.log('word is reversed ', reverseWord);
  }
}

export default Palindrome;
