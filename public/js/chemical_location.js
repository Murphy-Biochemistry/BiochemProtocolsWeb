// JS_STREAMLINE
// JS_COMMENTS

(function () {
  const container = document.currentScript.previousElementSibling;
  const chemical = container.dataset.chemical;
  const input = container.querySelector('.location-input');
  const button = container.querySelector('.save-btn');

  const storageKey = `chemical-location:${chemical}`;

  // Load saved value
  const savedValue = localStorage.getItem(storageKey);
  if (savedValue !== null) {
    input.value = savedValue;
  }

  let lastSavedValue = input.value;

  function updateButtonState() {
    const changed = input.value !== lastSavedValue;
    button.disabled = !changed;
    button.classList.toggle('enabled', changed);
  }

  function save() {
    if (input.value !== lastSavedValue) {
      localStorage.setItem(storageKey, input.value);
      lastSavedValue = input.value;
      updateButtonState();
    }
  }

  input.addEventListener('input', updateButtonState);

  // Save on disk icon click
  button.addEventListener('click', save);

  // Save on Enter key
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // prevent form submit if inside one
      save();
    }
  });

  updateButtonState();
})();