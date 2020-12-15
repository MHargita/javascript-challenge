// from data.js
var tableData = data;


// YOUR CODE HERE!
var tbody = d3.select("tbody");
var button = d3.select("#filter-btn");
var form = d3.select("#filters");

function runEnter() {
  d3.event.preventDefault();
  var inputElement = d3.select("#datetime");
  var inputValue = inputElement.property("value");
  console.log(inputValue);
  console.log(tableData);
  var filteredData = tableData.filter(table => table.datetime === inputValue);
console.log(filteredData);
};

button.on("click", runEnter);
form.on("submit", runEnter);

tableData.forEach(function(ufodata) {
    console.log(ufodata);
    var row = tbody.append("tr");
  
    Object.entries(ufodata).forEach(function([key, value]) {
      console.log(key, value);
      var cell = row.append("td");
      cell.text(value);
      var list = d3.select(".table table-striped");
      list.append(filtered Data);
    });
  });


