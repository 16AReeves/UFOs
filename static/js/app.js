// import the data from data.js
const tableData = data;


// Reference the HTML table using d3 (d3 is a JS library for dashboards/visual data)
let tbody = d3.select("tbody");

// Create a function to build the table from the data:
function buildTable(data) {
    // First, clear out any existing data
    tbody.html("");
  
    // Next, loop through each object in the data
    // and append a row and cells for each value in the row
    data.forEach((dataRow) => {
      // Append a row to the table body
      let row = tbody.append("tr");
  
      // Loop through each field in the dataRow and add
      // each value as a table cell (td)
      Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
        cell.text(val);
        }
      );
    });
  }


  // Create filters for the table and look for button clicks
  function handleClick() {

    // filter by date
    let date = d3.select("#datetime").property("value");

    // filter by user search terms (default/generic filter)
    let filteredData = tableData;

    // Have JS check for a date, return only the date specifed if found
    if (date) {
        // check for exact date specifed
        filteredData = filteredData.filter(row => row.datetime === date);
    };
     // Rebuild the table using the filtered data
    // @NOTE: If no date was entered, then filteredData will
    // just be the original tableData.
    buildTable(filteredData);

    // check for a click on the webpage
    d3.selectAll("#filter-btn").on("click", handleClick);
};


// Load the table as soon as the website loads
buildTable(tableData);


