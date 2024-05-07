const buttons = document.querySelectorAll('.btn');
const body = document.querySelector('body');

buttons.forEach((button) => {
    button.addEventListener('mouseover',(e) => {
        body.style.backgroundColor = e.target.id;
        button.style.height = "150px";
        button.style.width = "150px";
    });
    button.addEventListener('mouseout',(e) => {
        body.style.backgroundColor = e.target.id;
        button.style.height = "100px";
        button.style.width = "100px";
    });
});