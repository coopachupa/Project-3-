let title = `Top 5 Coffee Importing Countries`;

let countries = ["European Union", "United States", "Japan", "Phillipines", "Canada"];

let importssbykg = [45106, 25481, 7582, 5715, 4863];

let trace1 = {
  x: countries,
  y: importssbykg,
  type: 'bar'
};

let data = [trace1];

let layout = {
  title: title
};

Plotly.newPlot("b2plot", data, layout);

