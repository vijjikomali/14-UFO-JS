// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the UFO data from data.js
console.log(data);

// // Step 1: Loop Through `data` and console.log each UFO data object
data.forEach(function(UFOdata) {
   console.log(UFOdata);
 });

 d3.select(".summary").html(" ");




// // Step 5: Use d3 to update each cell's text with
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