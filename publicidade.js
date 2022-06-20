'use strict'

const attr1 = document.currentScript.getAttribute('data-attr1');
const attr2 = document.currentScript.getAttribute('data-attr2');

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#attr1').innerHTML = attr1;
    document.querySelector('#attr2').innerHTML = attr2;
});
