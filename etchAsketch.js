const divContainer = document.querySelector('#gridContainer');



function makeDivs (number) {
    for (let i = 0; i < number;  i++) {
        const newDiv = document.createElement('div');
        divContainer.appendChild(newDiv);
        newDiv.className = 'gridBlock';
    }
}

makeDivs(4);

const gridBlockClass = document.querySelector('.gridBlock');
