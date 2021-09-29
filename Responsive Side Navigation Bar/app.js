'use strict'

const btn = document.querySelector('#btn');
const sidebar = document.querySelector('.sidebar');
const searchBtn = document.querySelector('.bx-search-alt');

btn.addEventListener('click', () => {
    sidebar.classList.toggle('active');
    searchBtn.classList.toggle('active');
});

searchBtn.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});