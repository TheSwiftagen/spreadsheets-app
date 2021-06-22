const allSheet = {
  title: '',
  sheets: [],
};

const createSheet = () => {
  const sheetDB = [];
  for (let i = 0; i < rows; i += 1) {
    const row = [];
    for (let j = 0; j < cols; j += 1) {
      const cell = {
        bold: 'normal',
        italic: 'normal',
        underline: 'none',
        fontSize: '16',
        fontFamily: 'sans-serif',
        color: '',
        bColor: '',
        align: 'left',
        formula: '',
        value: '',
        children: [],
      };
      row.push(cell);
    }
    sheetDB.push(row);
  }
  allSheet.sheets.push(sheetDB);
}

createSheet();
