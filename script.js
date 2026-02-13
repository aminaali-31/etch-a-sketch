console.log("Hello I have been loaded");
let cont = document.querySelector('.container')
let btn = document.querySelector('#size')
let clear = document.querySelector("#clear")
clear.addEventListener('click', () => createGrid(15*15,15));
btn.addEventListener('click', () => askSize())
let n = 16;
createGrid(n*n ,16);
function askSize()
{
    let size = prompt("Enter no. of squares per side: ")
    if (size < 1 || size > 125)
    {
        alert("Cannot create a grid of this size")
        return;
    }
    else {
        createGrid(size * size , size);
    }
}
function createGrid(siz,size)
{
    cont.innerHTML = '';
    for (let i = 1; i <= siz; i++)
    {
    let div = document.createElement('div');
    div.style.setProperty('--cols',size);
    div.style.backgroundColor = 'rgb(255, 255, 255)';
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let color = `rgb(${r},${g},${b})`;
    div.addEventListener('mouseover', () => div.style.backgroundColor = color)
    cont.appendChild(div);
    }
}
