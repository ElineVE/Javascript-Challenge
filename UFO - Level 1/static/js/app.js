// from data.js
var tableData = data;

//Select table 

function buildtable(tableData) {


    var tbody = d3.select("tbody");
    tbody.html('');

    //Populate table
    tableData.forEach(function(uSighting) {
        var row = tbody.append("tr");
        Object.entries(uSighting).forEach(function([key, value]) {
            // Append cells to row for each value in uSighting
            var cell = row.append("td");
            cell.text(value);
        });
    });
}
// Call function

buildtable(tableData);



// Select button, create function

var button = d3.select('#filter-btn');
button.on('click', function() {
    // Select input element, get html node
    var inputElement = d3.select('#datetime');
    // Obtain value property of inputElement
    var inputDate = inputElement.property('value');
    console.log(inputDate)
        // Filter data for searched value
    var filteredData = tableData.filter(uSighting => uSighting.datetime == inputDate)
    console.log(filteredData);

    buildtable(filteredData)
})