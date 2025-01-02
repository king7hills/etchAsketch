const divContainer = document.querySelector('#gridContainer');

//makeColumnDivs(3);




function makeRowDivs (number) {
    for (let i = 0; i < number; i++) {
        const rowDiv = document.createElement('div');
        divContainer.appendChild(rowDiv);
        rowDiv.classList.add('rowDiv');
        
        function makeColumnDivs (number) {
            for (let i = 0; i < number;  i++) {
                const newDiv = document.createElement('div');
                rowDiv.appendChild(newDiv);
                newDiv.classList.add('gridBlock', 'columnDiv');
            }
        }

        makeColumnDivs(number);
    }
}



makeRowDivs(16);