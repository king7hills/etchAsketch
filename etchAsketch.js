let divContainer = document.querySelector('#gridContainer');

//Grid function. Row creation with nested column creation. Default 16.
function makeGrid (number = 16) {
    for (let i = 0; i < number; i++) {
        const rowDiv = document.createElement('div');
        divContainer.appendChild(rowDiv);
        rowDiv.classList.add('rowDiv', 'grid');
        
        function makeColumnDivs (number) {
            for (let i = 0; i < number;  i++) {
                const newDiv = document.createElement('div');
                rowDiv.appendChild(newDiv);
                newDiv.classList.add('gridBlock', 'columnDiv', 'grid');
            }
        }

        makeColumnDivs(number);
    }
}
//default grid creation
makeGrid();


const docBody = divContainer.parentNode;

//previous grid removal
function removeGrid() {
    docBody.removeChild(divContainer);
}
//restoration of container div
function restoreGrid() {
    const renewedDiv = document.createElement('div');
    docBody.appendChild(renewedDiv);
    renewedDiv.id = 'gridContainer';
    divContainer = renewedDiv;
}
//wrapper function for grid reset
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
}

gridButton.addEventListener('click', () => changeSize());