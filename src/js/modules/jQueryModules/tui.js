// import Chart from '@toast-ui/chart';
// import { BarChart } from '@toast-ui/chart';

// const Chart = require('@toast-ui/chart');

const Chart = toastui.Chart;


// import '@toast-ui/chart/dist/toastui-chart.min.css';

const el = document.getElementById('chart');
const data = {
  categories: ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  series: [
    {
      name: 'Budget',
      data: [5000, 3000, 5000, 7000, 6000, 4000, 1000],
    },
    {
      name: 'Income',
      data: [8000, 4000, 7000, 2000, 6000, 3000, 5000],
    },
  ],
};
const options = {
  chart: { width: 700, height: 400 },
};

const chart = Chart.barChart({ el, data, options });
// const chart = new BarChart({ el, data, options }); // Second way