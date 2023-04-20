// This function handles the drop event, preventing the default behavior and logging information about the dropped files
function dropHandler(event) {
    event.preventDefault();

    // Get the dragged files
    const files = event.dataTransfer.files;

    // Iterate over the files and log information about each one
    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        console.log(file.name, file.type, file.size);
    }
}

// This function handles the dragover event, preventing the default behavior
function dragOverHandler(event) {
    event.preventDefault();
}

// This function handles the dragenter event, preventing the default behavior and adding a CSS class to the drop zone
function dragEnterHandler(event) {
    event.preventDefault();
    event.currentTarget.classList.add('my-drag-over');
}

// This function handles the dragleave event, preventing the default behavior and removing a CSS class from the drop zone
function dragLeaveHandler(event) {
    event.preventDefault();
    event.currentTarget.classList.remove('my-drag-over');
}

// This code selects the button element and adds a mousedown event listener to it, which prevents the default behavior and clicks the file input element
const button = document.querySelector('.my-browse-files');
button.addEventListener('mousedown', function(event) {
    event.preventDefault(); // prevents page reload
    document.getElementById('my-file-input').click();
});
