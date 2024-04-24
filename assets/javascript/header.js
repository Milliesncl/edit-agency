const close = document.getElementById('close');
const menu = document.getElementById('menu');
const dialog = document.getElementById('dialog');
const open = document.getElementById('open');

close.addEventListener('click', () => {
  menu.classList.toggle('hidden');
  dialog.classList.toggle('hidden');
});

open.addEventListener('click', () => {
  menu.classList.toggle('hidden');
  dialog.classList.toggle('hidden');
});
