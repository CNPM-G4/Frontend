document.addEventListener("DOMContentLoaded", function () {
    const pieChart = document.querySelector(".pie-chart");
    const lineChart = document.querySelector(".line-chart");
    const stats = document.querySelectorAll(".stat-box h2");
    
    function updateCharts() {
        pieChart.innerHTML = "<h3>Pie Chart Data</h3>";
        lineChart.innerHTML = "<h3>Line Chart Data</h3>";
    }

    function updateStats() {
        stats.forEach((stat, index) => {
            stat.textContent = Math.floor(Math.random() * 10000);
        });
    }

    updateCharts();
    updateStats();
});
document.addEventListener("DOMContentLoaded", function () {
    const pieChart = document.querySelector(".pie-chart");
    const lineChart = document.querySelector(".line-chart");
    const stats = document.querySelectorAll(".stat-box h2");

    // Căn giữa nội dung trong Pie Chart
    pieChart.style.display = "flex";
    pieChart.style.alignItems = "center";
    pieChart.style.justifyContent = "center";
    pieChart.innerHTML = "<canvas id='pieChartCanvas'></canvas>";
    const pieCtx = document.getElementById("pieChartCanvas").getContext("2d");

    const dataUsage = [500 , 700, 600, 800, 750, 900, 650];
    const labels = ["Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7", "CN"];
    const colors = ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF", "#FF9F40", "#8DD776"];

    new Chart(pieCtx, {
        type: "pie",
        data: {
            labels: labels,
            datasets: [{
                data: dataUsage,
                backgroundColor: colors,
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: "bottom"
                }
            }
        }
    });

    // Thêm biểu đồ đường cho Line Chart
    lineChart.innerHTML = "<canvas id='lineChartCanvas'></canvas>";
    const lineCtx = document.getElementById("lineChartCanvas").getContext("2d");

    new Chart(lineCtx, {
        type: "line",
        data: {
            labels: labels,
            datasets: [{
                label: "Dữ liệu sử dụng (MB)",
                data: dataUsage,
                borderColor: "#36A2EB",
                backgroundColor: "rgba(54, 162, 235, 0.2)",
                borderWidth: 2,
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: "top"
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    function updateStats() {
        stats.forEach((stat, index) => {
            stat.textContent = Math.floor(Math.random() * 10000);
        });
    }

    updateStats();
    
});

