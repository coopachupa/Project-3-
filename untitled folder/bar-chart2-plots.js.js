// Get the canvas element where the chart will be drawn
const ctx = document.getElementById('myChart').getContext('2d');

// Create a bar chart using Chart.js
const myChart = new Chart(ctx, {
    type: 'bar',  // Type of chart (bar chart)
    data: {
        labels: ['January', 'February', 'March', 'April', 'May'],  // X-axis labels
        datasets: [{
            label: 'Monthly Sales',  // The label for the dataset
            data: [12, 19, 3, 5, 2],  // The data for the bar chart
            backgroundColor: 'rgba(75, 192, 192, 0.2)',  // Bar color
            borderColor: 'rgba(75, 192, 192, 1)',  // Border color
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,  // Make chart responsive
        scales: {
            y: {
                beginAtZero: true  // Start the Y-axis from 0
            }
        }
    }
});
