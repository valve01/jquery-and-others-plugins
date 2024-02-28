

let data = [
	[1546300800, 1546387200],    // x-values (timestamps)
	[        35,         71],    // y-values (series 1)
	[        90,         15],    // y-values (series 2)
  ];

let opts = {
	title: "My Chart",
	id: "chart1",
	class: "my-chart",
	width: 800,
	height: 600,
	series: [
	  {},
	  {
		label: "CPU",
		stroke: "red",
		scale: "%",
		value: (self, rawValue) => rawValue.toFixed(1) + "%",
	  },
	  {
		label: "RAM",
		stroke: "blue",
		scale: "%",
		value: (self, rawValue) => rawValue.toFixed(1) + "%",
	  },
	  {
		label: "TCP",
		stroke: "green",
		scale: "mb",
		value: (self, rawValue) => rawValue.toFixed(2) + "MB",
	  },
	  {
		// initial toggled state (optional)
		show: true,
  
		spanGaps: false,
  
		// in-legend display
		label: "RAM",
		value: (self, rawValue) => "$" + rawValue.toFixed(2),
  
		// series style
		stroke: "red",
		width: 1,
		fill: "#000",
		dash: [10, 5],
	  }
	],
  };
  
  let uplot = new uPlot(opts, data, document.body);