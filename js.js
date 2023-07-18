

const containerMainDiv = document.querySelector('.container.main');

const containerGridDiv = document.querySelector('.container.grid');

let gridSize = 15;
let cellDimension = 500/gridSize;
let rowWidth = gridSize*cellDimension;

createGrid();
enableColorChange();

const gridSizeBtn = document.querySelector('.grid-size');
gridSizeBtn.addEventListener("click", gridPopup);

function gridPopup() {
    gridSize = prompt("Enter new grid value");
    cellDimension = 500/gridSize;

    deleteGrid();
    createGrid();
    enableColorChange();
}

function enableColorChange() {
    const cells = Array.from(document.querySelectorAll('.cell'));
    cells.forEach(cell => cell.addEventListener("mouseover", changeColor));
}

function changeColor(e) {
    e.target.style.backgroundColor = 'red';
}

function createGrid() {
    createRows();
}

function createRows() {
    for (i=0; i<gridSize; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        row.classList.add(`r${i+1}`);
        row.style.width = `${rowWidth}px`;
        row.style.height = `${cellDimension}px`;
        containerGridDiv.append(row);
        createCells(row);
    }
}

function createCells(row) {
    for (r=0; r<gridSize; r++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.classList.add(`c${r+1}`);
        cell.style.width = `${cellDimension}px`;
        cell.style.height = `${cellDimension}px`;
        row.append(cell);
    }
}

function deleteGrid() {
    const rows = Array.from(document.querySelectorAll('.row'));
    rows.forEach((row) => row.remove());
}



