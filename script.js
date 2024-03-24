function calculate() {
  var totalRupees = parseFloat(document.getElementById('totalRupees').value);
  var totalPages = parseInt(document.getElementById('totalPages').value);
  var pageLength = parseFloat(document.getElementById('pageLength').value);
  var pageWidth = parseFloat(document.getElementById('pageWidth').value);
  
  var area = (pageLength * pageWidth) / 100; // Convert cm^2 to square centimeters
  var costPerPageArea = totalRupees / (totalPages * area);
  
  document.getElementById('result').innerHTML = 'Cost per per-page area: ' + costPerPageArea.toFixed(4) + ' Rupees per square cm';
}
