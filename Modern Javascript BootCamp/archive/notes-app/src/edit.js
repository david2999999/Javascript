import {generateLastEdited, initializeEditPage} from './views';
import { updateNotes, removeNote } from "./notes";

const titleElement = document.querySelector('#note-title');
const bodyElement = document.querySelector('#note-body');
const removeElement = document.querySelector('#remove-note');
const dateElement = document.querySelector('#last-edited');
const noteId = location.hash.substring(1);

initializeEditPage(noteId);

titleElement.addEventListener('input', (e) => {
    const note = updateNotes({
        title: e.target['value']
    });
    dateElement.textContent = generateLastEdited(note.updatedAt);
});

bodyElement.addEventListener('input', (e) => {
    const note = updateNotes({
        body: e.target['value']
    });

    dateElement.textContent = generateLastEdited(note.updatedAt);
});

removeElement.addEventListener('click', () => {
    removeNote(noteId);
    saveNotes(notes);
    location.assign('/index.html')
});

window.addEventListener('storage', (e) => {
    if(e.key === 'notes') {
        initializeEditPage(noteId);
    }
});
