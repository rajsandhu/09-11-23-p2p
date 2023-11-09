// document.getElementById('note-form').addEventListener('submit', function(e) {
//     e.preventDefault();

//     // Get the note input value
//     var noteInput = document.getElementById('note-input');
//     var noteText = noteInput.value;

//     // **** Split the note text by line breaks
//     var noteLines = noteText.split('\n');

//     // // Create a new note element
//     var noteElement = document.createElement('p');
//     // noteElement.textContent = noteText;

//     // **** Create a heading for the first line
//     var noteHeading = document.createElement('h2');
//     noteHeading.textContent = noteLines[0];
//     noteElement.appendChild(noteHeading);

//     // **** Create a paragraph for the rest of the note
//     var noteBody = document.createElement('p');
//     noteBody.textContent = noteLines.slice(1).join('\n');
//     noteElement.appendChild(noteBody);

//     // Add the new note to the notes section
//     var notesSection = document.getElementById('notes-section');
//     notesSection.prepend(noteElement);

//     // Clear the note input
//     noteInput.value = '';
// });

document.getElementById('note-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get the note input value
    var noteInput = document.getElementById('note-input');
    var noteText = noteInput.value;

    // Split the note text by line breaks
    var noteLines = noteText.split('\n');

    // Create a new note element
    var noteElement = document.createElement('div');
    noteElement.className = 'card mb-4';

    // Create a card body for the note
    var noteBody = document.createElement('div');
    noteBody.className = 'card-body';

    // Create a heading for the first line
    var noteHeading = document.createElement('h5');
    noteHeading.className = 'card-title';
    noteHeading.textContent = noteLines[0];
    noteBody.appendChild(noteHeading);

    // Create a paragraph for the rest of the note
    var noteText = document.createElement('p');
    noteText.className = 'card-text';
    noteText.textContent = noteLines.slice(1).join('\n');
    noteBody.appendChild(noteText);

    // Add the card body to the note element
    noteElement.appendChild(noteBody);

    // Add the new note to the notes section
    var notesSection = document.getElementById('notes-section');
    notesSection.prepend(noteElement);

    // Add the note title to the note index
    // https://getbootstrap.com/docs/5.3/components/list-group/#for-links-and-buttons
    
    var noteIndexItem = document.createElement('a');
    noteIndexItem.className = 'list-group-item list-group-item-action';
    noteIndexItem.textContent = noteLines[0];
    var noteIndex = document.getElementById('note-index');
    noteIndex.prepend(noteIndexItem);


    // Clear the note input
    noteInput.value = '';
});