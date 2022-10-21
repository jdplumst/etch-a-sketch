// Select elements
const containerDiv = document.querySelector('.container');
const btn = document.querySelector('button');

// Default grid size
let size = 16;

// Create the grid of size n x n
function createGrid(n) {
    // Clear all container child elements
    containerDiv.replaceChildren();
    
    // Set number of rows and columns
    containerDiv.gridTemplateColumns = 'repeat(n, auto)';
    containerDiv.gridTemplateColumns = 'repeat(n, auto)';
    
    // Create 2D array
    let divArr = [];
    for (let i = 0; i < n; i++) {
        divArr[i] = new Array(2);
    }

    // Create nxn divs and place them in containerDiv
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            divArr[i][j] = document.createElement('div');
            // console.log(divArr[i][j]);
            divArr[i][j].classList.add('item');
            divArr[i][j].style.gridRowStart = i+1;
            divArr[i][j].style.gridRowEnd = i+2;
            divArr[i][j].style.gridColumnStart = j+1;
            divArr[i][j].style.gridColumnEnd = j+2;
            containerDiv.appendChild(divArr[i][j]);
        }
    }
}

// Create a size x size grid by default when the page loads
window.onload = createGrid(size);

btn.addEventListener('click', () => {
    while (true) {
        size = prompt('Enter the number of squares per side of the grid. (Maximum: 100)');
        if (Number.isInteger(parseInt(Number(size))) && size <= 100 && size > 0) break;
    }
    createGrid(size);
})