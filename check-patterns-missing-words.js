function addWordsToChips(wordList) {
  const inputElement = document.querySelector('.bc-editable-chips-chip-add input.mat-input-element');

  if (!inputElement) {
    console.error('Could not find the input element to add words. Please ensure the DOM structure is as expected.');
    return;
  }

  wordList.forEach((word, index) => {
    setTimeout(() => { // Use setTimeout to allow Angular to process each word sequentially
      inputElement.value = word;

      // Create and dispatch an 'input' event
      const inputEvent = new Event('input', {
        bubbles: true,
        cancelable: true,
      });
      inputElement.dispatchEvent(inputEvent);

      // Create and dispatch a 'blur' event to trigger the chip creation
      const blurEvent = new Event('blur', {
        bubbles: true,
        cancelable: true,
      });
      inputElement.dispatchEvent(blurEvent);

      console.log(`Attempted to add: "${word}"`);

    }, 100 * index); // Small delay for each word to ensure Angular can keep up
  });
}

// List of words you want to add
const myWords = [
  'agent',
  'Agent',
  'Customer Service',
  'customer service',
  'Representative',
  'representative',
  'agent*',
  '*agent',
  'Agent*',
  '*Agent'
];

// Call the function to add the words
addWordsToChips(myWords);
