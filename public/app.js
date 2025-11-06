const socket = io();

const editor = document.getElementById('editor');

editor.addEventListener('input', () => {
    socket.emit('editorChange', editor.value);
});

socket.on('editorChange', (value) => {
    editor.value = value;
});
