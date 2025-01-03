let divContainer = document.querySelector('#gridContainer');

//Grid function. Row creation with nested column creation. Default 16.
function makeGrid (number = 16) {
    for (let i = 0; i < number; i++) {
        const rowDiv = document.createElement('div');
        divContainer.appendChild(rowDiv);
        rowDiv.classList.add('rowDiv');
        
        function makeColumnDivs (number) {
            for (let i = 0; i < number;  i++) {
                const newDiv = document.createElement('div');
                rowDiv.appendChild(newDiv);
                newDiv.classList.add('gridBlock', 'columnDiv');
                let dynPad = 36/number;
                newDiv.style.padding = `${dynPad}vmin`
            }
        }

        makeColumnDivs(number);
    }
}
makeGrid();

function blockFill () {
    const gridBlock = document.querySelectorAll('.gridBlock');
    for (let i = 0; i < gridBlock.length; i++) {
        gridBlock[i].addEventListener("mouseover", () => {
        gridBlock[i].style.backgroundColor = '#696969'
    })}
}
blockFill();

function rainbowFill () {
    const gridBlock = document.querySelectorAll('.gridBlock');
    for (let i = 0; i < gridBlock.length; i++) {
        let r = Math.floor(Math.random()*256);
        let g = Math.floor(Math.random()*256);
        let b = Math.floor(Math.random()*256);
        gridBlock[i].addEventListener("mouseover", () => {
        gridBlock[i].style.backgroundColor = 'r, g, b'
    })}
}



const docBody = divContainer.parentNode;

function removeGrid() {
    docBody.removeChild(divContainer);
}

function restoreGrid() {
    const renewedDiv = document.createElement('div');
    docBody.appendChild(renewedDiv);
    renewedDiv.id = 'gridContainer';
    divContainer = renewedDiv;
}

function gridReset() {
    removeGrid();
    restoreGrid();
}

const gridButton = document.querySelector('#changeGrid');
let gridSize = ''

function changeSize () {
    let gridInput = prompt('Input grid size between 1-100:');
    gridSize = Number(gridInput);
    if (gridSize <= 100) {
    } else {
        alert("Invalid number");
        return;
    };
    gridReset();
    makeGrid(gridSize);
    blockFill();
}

gridButton.addEventListener('click', () => changeSize());

