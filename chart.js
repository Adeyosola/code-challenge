var XAXIS = ["12:31:00", "12:31:15", "12:31:30", "12:31:45", "12:32:00", "12:32:15", "12:32:30", "12:32:45", "12:33:00", "12:33:15", "12:33:30", "12:33:45"];
var config = {
    type: 'line',               
    data: {
        labels: ["12:31:00", "12:31:15", "12:31:30", "12:31:45", "12:32:00", "12:32:15", "12:32:30", "12:32:45"],
        datasets: [
        {
            label: "211",
            backgroundColor: window.chartColors.red,
            borderColor: window.chartColors.red,
            fill: false,
            data: [
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor()
            ],
        }, 
        {
            label: "212",
            fill: false,
            backgroundColor: window.chartColors.blue,
            borderColor: window.chartColors.blue,
            data: [
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor()
            ],
        }, 
        {
            label: "213",
            fill: false,
            backgroundColor: window.chartColors.green,
            borderColor: window.chartColors.green,
            data: [
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor()
            ],
        }, 
        {
            label: "214",
            fill: false,
            backgroundColor: window.chartColors.purple,
            borderColor: window.chartColors.purple,
            data: [
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor()
            ],
         },
         {
            label: "215",
            fill: false,
            backgroundColor: window.chartColors.orange,
            borderColor: window.chartColors.orange,
            data: [
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor()
            ],
        }, 
        {
            label: "216",
            fill: false,
            backgroundColor: window.chartColors.yellow,
            borderColor: window.chartColors.yellow,
            data: [
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor()
            ],
        }]
    },
    options: {
        responsive: true,
        animation: {
            duration: 10000, 
            easing: 'linear',
        },
        legend:{display: false},               
        tooltips: { enabled: false},
        hover: {
            mode: 'nearest',
            intersect: true
        },
        scales: {
            xAxes: [{
                display: true,
                scaleLabel: {display: false}
            }],
            yAxes: [{
                ticks: {beginAtZero:true},
                display: true,
                scaleLabel: {display: false}
            }]
        }
    },     
   
};

window.onload = function() {
    var ctx = document.getElementById("canvas").getContext("2d");
    window.myLine = new Chart(ctx, config);
};
document.getElementById('removeDataset').addEventListener('click', function() {
    config.data.datasets.splice(0, 1);
    window.myLine.update();
});
      