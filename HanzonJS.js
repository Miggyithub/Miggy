const alternatives = [
    {text:"", images:"Cat1.gif"},
    {text:"Are you sure?", images:"Cat2.gif"},
    {text:"Why? Dont you like me?", images:"Cat3.gif"},
    {text:"Just say yes, or i will crash out..", images:"Cat4.gif"},
    {text:"I'll be you man for a lifetime", images:"Cat5.gif"}
];
const ohyes = {text:"Hays, Alam kong oo din sagot mo :P", images:"MeandF.gif"};
const title = document.querySelector('.title');
const text = document.querySelector('.text');
const cat = document.querySelector('.cat');     
const buttons = document.querySelectorAll('.button');
const errorButton = document.querySelector('.button__error');

let count = 0;
function updateDisplay(item) {
    console.log(item);
    cat.src = item.images;
    text.innerHTML = item.text; 
}

errorButton.addEventListener('click', () => {
    count = 0;
    updateDisplay(alternatives[count]);
    buttons.forEach(btn => btn.style.display = 'inline-block');
    errorButton.style.display = 'none';
});

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if(button.textContent === 'YES'){
            updateDisplay(ohyes);
            buttons.forEach(btn => btn.style.display = 'none');
        }
        if (button.textContent === 'NO'){
            count++;
            if(count < alternatives.length){
                updateDisplay(alternatives[count]);
            } else {
                buttons.forEach(btn => btn.style.display = 'none');
                errorButton.style.display = 'inline-block';
            }
        }
    });
});

