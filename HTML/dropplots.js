// Initializes the page with a default plot
function init() {
  let data = [{
    x: ["Brazil", "Vietnam", "Colombia", "Indonesia", "India"],
    y: [37894, 27088, 12433, 8056, 5869],
    type: 'bar'
  }];

  Plotly.newPlot("plot", data);
}

// Call updatePlotly() when a change takes place to the DOM
d3.selectAll("#selDataset").on("change", updatePlotly);

// This function is called when a dropdown menu item is selected
function updatePlotly() {

  // Use D3 to select the dropdown menu
  let dropdownMenu = d3.select("#selDataset");

  // Assign the value of the dropdown menu option to a variable
  let dataset = dropdownMenu.property("value");

  // Initialize x and y arrays
  let x = [];
  let y = [];

  if (dataset === 'Exports') {
    x = ["Brazil", "Vietnam", "Colombia", "Indonesia", "India"];
    y = [37894, 27088, 12433, 8056, 5869];
  }
  else if (dataset === 'Imports') {
    x = ["European Union", "United States", "Japan", "Philippines", "Canada"];
    y = [45106, 25481, 7582, 5715, 4863];
  }

  // Note the extra brackets around 'x' and 'y'
  Plotly.restyle("plot", "x", [x]);
  Plotly.restyle("plot", "y", [y]);
}

init();
