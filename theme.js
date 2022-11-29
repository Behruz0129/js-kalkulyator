'use strict';

const themeButtons = document.querySelectorAll('[data-theme]');

themeButtons.forEach(button => {
  button.addEventListener('click', e => {
    document.body.classList.remove(document.body.classList[0]);
    document.body.classList.add(e.target.className.split(' ')[0]);
    themeButtons.forEach(b => b.classList.remove('active'));
    e.target.classList.add('active');
  });
});
