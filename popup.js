// Get the button and title display elements
const getTitleButton = document.getElementById('btn');
const titleDisplay = document.getElementById('title-value');

// Add a click event listener to the button
getTitleButton.addEventListener('click', () => {
  // Get the active tab
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    // Get the title of the active tab
    // console.log({tabs})
    const tab = tabs[0];
    const tabTitle = tab.title;

    // Display the title in the popup
    titleDisplay.textContent = `Tab Title: ${tabTitle}`;
    titleDisplay.style.display = 'block';
  });
});
