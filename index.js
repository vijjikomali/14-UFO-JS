// Get a reference to the table body
var UFOdata = data;

var tbody = d3.select("tbody");

// // Step 1: Use d3 to update each cell's text with
// // UFO data values (Date	City	State	Country	Shape	Duration	Comments)
data.forEach(function(UFOdata) {
  console.log(UFOdata);
 var row = tbody.append("tr");
  Object.entries(UFOdata).forEach(function([key, value]) {
   console.log(key, value);
   //     // Append a cell to the row for each value
    // in the UFO report object
   var cell = row.append("td");
  cell.text(value);
  });
})


// Select the submit button
var submit = d3.select("#filter-btn");

submit.on("click", function() {
  // Prevent the page from refreshing
  d3.event.preventDefault();

  var inputElement = d3.select("#datetime");
  // Get the value property of the input element
  var inputValue = inputElement.property("value");
  
  console.log(inputValue);

  var filteredData = UFOdata.filter(yeardate => yeardate.datetime === inputValue);

  
  console.log(filteredData);
// se
  d3.select("tbody").html(" ");

  filteredData.forEach(function(UFOdata) {
    console.log(UFOdata);
   var row = tbody.append("tr");
    Object.entries(UFOdata).forEach(function([key, value]) {
     console.log(key, value);
     //     // Append a cell to the row for each value
      // in the UFO report object
     var cell = row.append("td");
    cell.text(value);
    });
  })

  })


