let title = `Top 5 Coffee Exporting Countries`;

let countries = ["Brazil", "Vietnam", "Columbia", "Indonesia", "India"];

let exportsbykg = [37894, 27088, 12433, 8056, 5869];

let trace1 = {
  x: countries,
  y: exportsbykg,
  type: 'bar'
};

let data = [trace1];

let layout = {
  title: title
};

Plotly.newPlot("bplot", data, layout);
