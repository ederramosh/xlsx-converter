document.getElementById('my_upload').addEventListener('change', (e) => {
    let file = e.target.files[0];
    let text = document.getElementById('my_upload').value;
    let fileName = text.substr(12, text.length-16);
    let reader = new FileReader();
    reader.onload = function(e) {
      let data = e.target.result;
      let workbook = XLSX.read(data, {
        type: 'binary',
        cellStyles: true,
      });
    XLSX.writeFile(workbook, `${fileName}.xlsx`);
    };
  
    reader.readAsBinaryString(file);
  });