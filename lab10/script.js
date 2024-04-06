document.addEventListener('DOMContentLoaded', function() {

    // Set the background color of <body> to a random color from the const 'colors'
    const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple', 'orange'];
    document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

    // Append a new <p> element
    const container = document.getElementById('container');
    const newParagraph = document.createElement('p');
    newParagraph.textContent = "New paragraph added dynamically!";
    container.appendChild(newParagraph);

    // Change text when button is clicked
    const changeTextBtn = document.getElementById('changeTextBtn');
    changeTextBtn.addEventListener('click', function() {
        const message = document.getElementById('message');
        message.textContent = "Text changed successfully!";
    });
});



