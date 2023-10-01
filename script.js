// Get the button and the download link element
const downloadButton = document.getElementById('downloadButton');
const downloadLink = document.getElementById('downloadLink');

// Add click event listener to the button
downloadButton.addEventListener('click', function() {
    // Set the href attribute of the download link to the image URL
    downloadLink.href = 'Images/img9.jpg';

    // Set a different filename for the downloaded file
    downloadLink.download = 'download.jpg';

    // Trigger a click event on the download link
    downloadLink.click();
});
