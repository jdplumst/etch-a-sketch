// Select elements
const containerDiv = document.querySelector('.container');
const btn = document.querySelector('button');
let items = document.querySelectorAll('.item');

// Default grid size
let size = 16;
let temp = 16;

// Create empy array of divs for grid items
let divArr = [];

// Shade a cell in the grid
function shade() {
    this.style.backgroundColor = 'black';
}

// Create the grid of size n x n
function createGrid(n) {
    // Clear all container child elements
    containerDiv.replaceChildren();
    
    // Set number of rows and columns
    containerDiv.gridTemplateColumns = 'repeat(n, auto)';
    containerDiv.gridTemplateColumns = 'repeat(n, auto)';
    
    // Create 2D array
    divArr = [];
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

    // Remove hover function for old grid
    items.forEach((item) => {
        item.removeEventListener('mouseover', shade)
    });

    // Select new grid
    items = document.querySelectorAll('.item');

    // Add hover function for new grid
    items.forEach((item) => {
        item.addEventListener('mouseover', shade)
    });
}

// Create a size x size grid by default when the page loads
window.onload = createGrid(size);

btn.addEventListener('click', () => {
    while (true) {
        temp = prompt('Enter the number of squares per side of the grid. (Maximum: 100)');
        if ((Number.isInteger(parseInt(Number(temp))) && temp <= 100 && temp > 0) 
        || temp === null) break;
    }
    if (temp === null) return;
    size = temp;
    createGrid(size);
});