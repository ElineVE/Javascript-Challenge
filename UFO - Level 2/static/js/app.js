// From data.js
var tableData = data;
console.log(tableData);

function buildtable(tableData) {


    // Select table body
    var tbody = d3.select('tbody')

    // Clear table body
    tbody.html('')

    // Loop through data, append rows to table body
    tableData.forEach(function(uSighting) {
        var row = tbody.append("tr");
        Object.values(uSighting).forEach(function(value) {
            console.log(value)
                // Append cells to row for each value in uSighting
            var cell = row.append("td").text(value);
        });
    });
}

buildtable(tableData);

var filter = {};

function updatefilters() {
    // Select inputelement and get html node
    var inputElement = d3.select(this).select('input');

    // Get value property for inputElement
    var inputprop = inputElement.property('value');
    console.log(inputprop)

    // Get value ID
    var valueID = inputElement.attr('id');
    console.log(valueID)
    if (inputprop) {
        filters[valueID] = inputprop;
    } else {
        delete filters[valueID]
    }
    filterfunction()
};


// Select button, create function

function filterfunction() {
    let filterdata = tableData;
    Object.entries(filters).forEach(([key, value]) => {
        filterdata = filterdata.filter(uSighting => uSighting[key] === value);
    });
    buildtable(filterdata);

}
d3.selectAll('.filter').on('change', updatefilters);