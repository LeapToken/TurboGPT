// Licensed under Creative Commons: By Attribution 4.0 License
// https://creativecommons.org/licenses/by-nc-sa/4.0/

// Find the TurboWarp Feedback button
var feedbackButton = document.querySelector('.menu-bar_feedback-link_1BnAR');

// Create a new button element
var chatGPTButton = document.createElement('button');
chatGPTButton.className = feedbackButton.className;
chatGPTButton.innerText = 'TurboGPT';
chatGPTButton.style.width = getComputedStyle(feedbackButton).width;
chatGPTButton.style.height = getComputedStyle(feedbackButton).height;
chatGPTButton.style.backgroundColor = 'white';
chatGPTButton.style.border = 'none';
chatGPTButton.style.marginLeft = '7px'; // Adjust the value to set the desired spacing
chatGPTButton.style.borderRadius = '4px'; // Adjust the value to set the desired roundness

// Flag to track whether the popup is open or closed
var isPopupOpen = false;

// Create a function to open the popup
function openPopup() {
  // Check if the popup is already open
  if (isPopupOpen) {
    return;
  }

  // Custom CSS/JavaScript popup code here
  // Replace the code below with your own custom popup implementation

  // Create a translucent background layer
  var backgroundLayer = document.createElement('div');
  backgroundLayer.style.position = 'fixed';
  backgroundLayer.style.top = '0';
  backgroundLayer.style.left = '0';
  backgroundLayer.style.width = '100%';
  backgroundLayer.style.height = '100%';
  backgroundLayer.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'; // Adjust the alpha value to set the desired opacity
  backgroundLayer.style.zIndex = '9998'; // Set a high z-index value to appear behind the popup

  // Create a popup container element
  var popupContainer = document.createElement('div');
  popupContainer.style.position = 'fixed';
  popupContainer.style.top = '50%';
  popupContainer.style.left = '50%';
  popupContainer.style.transform = 'translate(-50%, -50%)';
  popupContainer.style.backgroundColor = 'white';
  popupContainer.style.padding = '20px';
  popupContainer.style.borderRadius = '5px';
  popupContainer.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
  popupContainer.style.zIndex = '9999'; // Set a high z-index value to appear above other elements

  // Create an iframe element for the custom URL
  var customIframe = document.createElement('iframe');
  customIframe.src = 'https://gpt-4-chat-ui.freelimit.repl.co';
  customIframe.width = '800';
  customIframe.height = '600';
  customIframe.style.border = 'none';

  // Create a close button
	var closeButton = document.createElement('button');
	closeButton.innerText = 'Close';
	closeButton.style.position = 'absolute';
	closeButton.style.top = '-15px'; // Adjust the value to control the vertical positioning
	closeButton.style.right = '-15px'; // Adjust the value to control the horizontal positioning
	closeButton.style.backgroundColor = 'red';
	closeButton.style.color = 'white';
	closeButton.style.border = 'none';
	closeButton.style.padding = '5px 10px'; // Adjust the padding to control the size of the button
	closeButton.style.borderRadius = '10px'; // Adjust the border radius for rounded edges

	// Add a click event listener to the close button
	closeButton.addEventListener('click', function() {
	  // Hide the popup container, background layer, and the iframe contents
	  popupContainer.style.display = 'none';
	  backgroundLayer.style.display = 'none';
	  customIframe.style.display = 'none';

	  // Update the flag to indicate that the popup is closed
	  isPopupOpen = false;
	});

	// Append the close button to the popup container
	popupContainer.appendChild(closeButton);

	// Create a loading text element
	var loadingText = document.createElement('p');
	loadingText.innerText = 'Loading...';
	loadingText.style.position = 'absolute';
	loadingText.style.top = '50%';
	loadingText.style.left = '50%';
	loadingText.style.transform = 'translate(-50%, -50%)';
	loadingText.style.fontSize = '24px';
	loadingText.style.color = 'black';

	// Append the loading text to the popup container
	popupContainer.appendChild(loadingText);

	// Create a timeout for loading the website
	var timeout = setTimeout(function() {
	  // Change the loading text after 3 seconds
	  loadingText.innerText = 'Loading...';
	  var timeoutMessage = document.createElement('p');
	  timeoutMessage.style.fontSize = '14px';
	  timeoutMessage.style.textAlign = 'center'; // Center align the text
	  timeoutMessage.style.position = 'absolute';
	  timeoutMessage.style.top = 'calc(50% + 20px)'; // Position below the loading text
	  timeoutMessage.style.left = '50%';
	  timeoutMessage.style.transform = 'translate(-50%, -50%)';

	  var spanText = document.createElement('span');
	  spanText.style.whiteSpace = 'nowrap';
	
	  // Part before the link
	  var textBefore = document.createTextNode("Doesn't work? Follow ");
	  spanText.appendChild(textBefore);
	
	  // The hyperlink
	  var link = document.createElement('a');
	  link.setAttribute('href', 'https://example.com'); // Set your tutorial link here
	  link.innerText = 'THIS';
	  spanText.appendChild(link);
	  var textAfter = document.createTextNode(" tutorial!");
	  spanText.appendChild(textAfter);
	  document.body.appendChild(spanText);

	  timeoutMessage.appendChild(spanText);
	  loadingText.appendChild(timeoutMessage);
	}, 3000);

	// Add a load event listener to the iframe
	customIframe.addEventListener('load', function() {
	  // Clear the timeout when the iframe finishes loading
	  clearTimeout(timeout);
	  // Remove the loading text when the iframe finishes loading
	  loadingText.style.display = 'none';
	});

	// Create an iframe element for the custom URL
	var customIframe = document.createElement('iframe');
	customIframe.src = 'https://gpt-4-chat-ui.freelimit.repl.co';
	customIframe.width = '800';
	customIframe.height = '600';
	customIframe.style.border = 'none';

	// Add a load event listener to the iframe
	customIframe.addEventListener('load', function() {
	  // Remove the loading text when the iframe finishes loading
	  loadingText.style.display = 'none';
	});

	// Append the iframe to the popup container
	popupContainer.appendChild(customIframe);

  // Append the background layer and the popup container to the document body
  document.body.appendChild(backgroundLayer);
  document.body.appendChild(popupContainer);

  // Update the flag to indicate that the popup is open
  isPopupOpen = true;
}

// Add a click event listener to the ChatGPT button
chatGPTButton.addEventListener('click', openPopup);

// Insert the new button next to the TurboWarp Feedback button
feedbackButton.parentNode.insertBefore(chatGPTButton, feedbackButton.nextSibling);
