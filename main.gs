function myFunction() {
  
  function toTitleCase(str) { // defining the function that does the magic
    return str.replace(/\w\S*/g, function(txt){
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }
  
  var SPREADSHEET_ID = "WHATEVER-YOUR-GOOGLE-SHEETS-ID-IS"; // I prefer using publicly open to edit/view google sheets to use here
  const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
  const data = spreadsheet.getDataRange().getValues();
  var newData = [];
  for (var i = 0; i < data.length; i++) {
    var targets = "C" + String(i+1); // change this according to your use. here it represents the column where to add the updated strings, here it's column "C"
    var text = data[i][0];
    text = text.toLowerCase().split(' ').map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(' '); // magic in action
    var cell = spreadsheet.getRange(targets);
    cell.setValue(text); // prints the new names
  }
}
