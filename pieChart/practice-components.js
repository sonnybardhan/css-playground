const slider = document.querySelector('#slider');
const pieChart = document.querySelector('.pie-chart');

slider.addEventListener('input', (e) => {
  const { value } = e.target;

  pieChart.style = `--slider-position: ${value}%`;
});
