const containerDiv = document.querySelector('.container');

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
            console.log(divArr[i][j]);
            divArr[i][j].classList.add('item');
            divArr[i][j].style.gridRowStart = i+1;
            divArr[i][j].style.gridRowEnd = i+2;
            divArr[i][j].style.gridColumnStart = j+1;
            divArr[i][j].style.gridColumnEnd = j+2;
            containerDiv.appendChild(divArr[i][j]);
        }
    }
}

window.onload = createGrid(32);