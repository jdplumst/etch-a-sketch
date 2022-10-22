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
    // If cell is white, set it to a random color and store original random color
    let currColor = window.getComputedStyle(this).backgroundColor;
    // console.log(window.getComputedStyle(this).backgroundColor);
    if (currColor === 'rgb(255, 255, 255)') {
        this.style.setProperty('--original-r', Math.floor(Math.random()*255));
        this.style.setProperty('--original-g', Math.floor(Math.random()*255));
        this.style.setProperty('--original-b', Math.floor(Math.random()*255));
        this.style.backgroundColor = 'rgb(' + 
        window.getComputedStyle(this).getPropertyValue('--original-r') +
        ',' + window.getComputedStyle(this).getPropertyValue('--original-g') + 
        ',' + window.getComputedStyle(this).getPropertyValue('--original-b') + ')';
    } else {
        // If cell is not white, set it to be 10% darker than the original random color
        currColor = currColor.substring(4, currColor.length - 1)
            .replace(/ /g, '').split(',');
        let r = currColor[0];
        let g = currColor[1];
        let b = currColor[2];
        let originalRed = window.getComputedStyle(this).getPropertyValue('--original-r');
        let originalGreen = window.getComputedStyle(this).getPropertyValue('--original-g');
        let originalBlue = window.getComputedStyle(this).getPropertyValue('--original-b');
        this.style.backgroundColor = 'rgb(' + Math.floor(r - originalRed * 0.1) + 
        ',' + Math.floor(g - originalGreen * 0.1) + 
        ',' + Math.floor(b - originalBlue * 0.1) + ')'; 
    }
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