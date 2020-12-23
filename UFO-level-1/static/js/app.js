// from data.js
var tableData = data;


// YOUR CODE HERE!
var tbody = d3.select("tbody");
var button = d3.select("#filter-btn");
var form = d3.select("form");

tableData.forEach(function(ufodata) {
  console.log(ufodata);
  var row = tbody.append("tr");

  Object.entries(ufodata).forEach(function([key, value]) {
    console.log(key, value);
    var cell = row.append("td");
    cell.text(value);
    var list = d3.select(".table table-striped");
    list.append(tableData);
  });
});

button.on("click", runEnter);
form.on("submit", runEnter);

function runEnter() {
  d3.event.preventDefault();
  tbody.html("")
  var inputElement = d3.select("#datetime");
  var inputValue = inputElement.property("value");
  var filteredData = tableData.filter(table => table.datetime === inputValue);
  console.log(inputValue);
  console.log(tableData);
  console.log(filteredData);
  filteredData.forEach(ufodata => {
    var row = tbody.append("tr");
    console.log(ufodata);

    Object.entries(ufodata).forEach(function([key, value]) {
      var cell = tbody.append("td");
      cell.text(value);
    });
  });

};