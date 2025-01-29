const close = document.getElementById('close');
const menu = document.getElementById('menu');
const dialog = document.getElementById('dialog');
const open = document.getElementById('open');
const selection = document.getElementById('selection');

close.addEventListener('click', () => {
  menu.classList.toggle('hidden');
  dialog.classList.toggle('hidden');
});

open.addEventListener('click', () => {
  menu.classList.toggle('hidden');
  dialog.classList.toggle('hidden');
});

selection.addEventListener('click', (event) => {
  if (event.target.tagName === 'A') {
    menu.classList.add('hidden');
    dialog.classList.add('hidden');
  }
});
