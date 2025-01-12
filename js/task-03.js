const inputName = document.getElementById('name-input');
const outputName = document.getElementById('name-output');

inputName.addEventListener('input', () => {
  const inputValue = inputName.value.trim();
  outputName.textContent = inputValue ? inputValue : 'Anonymous';
});