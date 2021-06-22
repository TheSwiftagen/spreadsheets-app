const top_row = document.querySelector('.top_row');
const leftCol = document.querySelector('.left_col');
const grid = document.querySelector('.grid');
const rows = 100;
const cols = 26;

const createGrid = () => {
  for (let i = 0; i < rows; i += 1) {
    const col_box = document.createElement('div');
    col_box.setAttribute('class', 'left-col-box');
    col_box.setAttribute('class', 'box');
    col_box.innerText = i + 1;
    leftCol.appendChild(col_box);
  }

  for (let j = 0; j < cols; j += 1) {
    const cell = document.createElement('div');
    cell.setAttribute('class', 'cell');
    //cell.setAttribute("class", "cell");
    cell.innerText = String.fromCharCode(j + 65);
    top_row.appendChild(cell);
  }

  for (let i = 0; i < rows; i += 1) {
    const row = document.createElement('div');
    row.setAttribute('class', 'row');
    for (let j = 0; j < cols; j += 1) {
      const cell = document.createElement('div');
      cell.setAttribute('class', 'cell');
      cell.setAttribute('contenteditable', 'true');
      const [rid, cid] = [i, j];
      cell.setAttribute('rid', rid);
      cell.setAttribute('cid', cid);

      row.appendChild(cell);
    }
    grid.appendChild(row);
  }
};

createGrid();
