function displayWord() {
  wordEl.innerHTML = selectedWord
    .split('')
    .map(letter => `
      <span class="${correctLetters.includes(letter) ? 'revealed' : ''}">
        ${correctLetters.includes(letter) ? letter : '_'}
      </span>
    `)
    .join(' ');

  const innerWord = wordEl.textContent.replace(/\s/g, '');

  if(innerWord === selectedWord) {
    finalMessage.innerText = 'Parabéns! Você venceu! 🎉';
    popup.classList.add('show');
  }
}
function showNotification() {
  notification.innerText = 'Você já tentou essa letra!';
  notification.classList.add('show');
  setTimeout(() => {
    notification.classList.remove('show');
    notification.innerText = '';
  }, 1500);
}
