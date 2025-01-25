const input = document.querySelector('#task');
const form = document.querySelector('form');
const item = document.querySelector('.collection-item')
form.addEventListener('submit', function (e) {
    console.log(input.value);
   item.textContent = input.value;
    e.preventDefault();
});