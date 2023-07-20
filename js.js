

const containerMainDiv = document.querySelector('.container.main');

const containerGridDiv = document.querySelector('.container.grid');

let gridSize = 15;
let cellDimension = 500/gridSize;
let rowWidth = gridSize*cellDimension;
let color = 'black';

createGrid();
enableColorChange();
enableSizeSlider();
enableColorPicker();


function enableColorChange() {
    const cells = Array.from(document.querySelectorAll('.cell'));
    cells.forEach(cell => cell.addEventListener("mouseover", changeColor));
}

function changeColor(e) {
    e.target.style.backgroundColor = color;
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

function enableSizeSlider() {
    const sizeSlider = document.querySelector('#grid-size');
    sizeSlider.value = sizeSlider.attributes.defaultvalue.value;
    const sizeLabel = document.querySelector('#size-label');
    sizeLabel.textContent = `${sizeSlider.value} x ${sizeSlider.value}`;
    sizeSlider.addEventListener('mousemove', function () {
        sizeLabel.textContent = `${sizeSlider.value} x ${sizeSlider.value}`;
        gridSize = sizeSlider.value;
        cellDimension = 500/gridSize;
    })
}

function enableColorPicker() {
    const colorPicker = document.querySelector('#color-picker');
    colorPicker.addEventListener('change', function () {
        color = colorPicker.value;
    })
}

function resetGrid() {
    clearGrid();
    createGrid();
    enableColorChange();
}

function clearGrid() {
    const rows = Array.from(document.querySelectorAll('.row'));
    rows.forEach((row) => row.remove());
}



