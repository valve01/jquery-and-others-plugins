

/* Options */
var options = {
	// Minimum number.
	min: -100,
	// Maximum number.
	max: 100,
	// Background dash color.
	dashColor: '#e5e5e5',
	// Bar color.
	barColor: '#007bfb',
	// Bar speed.
	speed: 10,
	// Bar color gradient or not.
	gradient: true
  };
  
  /* Constructor */
  var barMeter = new zeu.BarMeter('bar-meter', options);
  
  /* Setter */
  barMeter.value = 0;
  barMeter.dashColor = '#e5e5e5';
  barMeter.barColor = '#007bfb';
  barMeter.speed = 5;