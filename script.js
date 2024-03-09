
const aKeyEvent = new KeyboardEvent('keydown', {
    key: 'a',
    code: 'KeyA',
    keyCode: 65,
    which: 65,
    charCode: 97,
    bubbles: true,
});

const clickEvent = new MouseEvent('click');

// Function to wait for a specified time
function wait(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

(async () => {
	// Wait for 10 seconds before running the script
	await wait(10000); // 10000 milliseconds = 10 seconds

	// Function to capture changes and get text content
	function handleMutations(mutations) {
		let lastMutationTime = Date.now(); // Track the time of the last mutation
		let timeout = null;

		// Clear the previous timeout to avoid multiple timeouts firing
		clearTimeout(timeout);

		// Set a new timeout to process the captured text after a delay
		timeout = setTimeout(() => {
			let capturedText = '';

			// Concatenate the text content of all the spans
			mutations.forEach(mutation => {
				mutation.addedNodes.forEach(node => {
					if (node.nodeType === Node.ELEMENT_NODE && node.tagName === 'SPAN') {
						capturedText += node.textContent.trim() + ' ';
					}
				});
			});

			// Set the captured text content to the textarea
			textArea=document.getElementById('bfTqV');
			// textArea.dispatchEvent(clickEvent);
			textArea.focus();
			textArea.dispatchEvent(aKeyEvent);


			textArea.value = capturedText.trim();




			// Trigger a click event on the button to send the message
			let botao = document.getElementsByClassName('VfPpkd-Bz112c-LgbsSe yHy1rc eT1oJ QDwDD tWDL4c  Cs0vCd')[0];
			botao.removeAttribute('disabled');
			botao.click();



			// Optional: Store or send the text content for further use
		}, 4000); // Adjust the delay as needed (e.g., 500 milliseconds)
	}

	// Select the parent element containing the spans
	let targetElement = document.querySelector('.iOzk7'); // Replace with the appropriate class

	// Create a MutationObserver instance
	let observer = new MutationObserver(handleMutations);

	// Observe changes in child nodes (spans)
	observer.observe(targetElement, { childList: true, subtree: true });

	console.log("Monitoring spans for changes...");
})();