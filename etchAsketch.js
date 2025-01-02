const divContainer = document.querySelector('#gridContainer');



function makeColumnDivs (number) {
    for (let i = 0; i < number;  i++) {
        const newDiv = document.createElement('div');
        divContainer.appendChild(newDiv);
        newDiv.className = 'gridBlock';
    }
}

makeColumnDivs(3);

const gridBlockClass = document.querySelector('.gridBlock');
