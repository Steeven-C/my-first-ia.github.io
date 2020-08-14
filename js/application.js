const createMessage = (answer) => {
  if (answer=="a") {
    return 'Vous aimez être le boss' 
  }
    
  else if(answer=="b") {
    return 'Je vous conseil un lit king size'
  }
  else if(answer=="c") {
    return "Le savoir c'est le pouvoir! ou pas"
  }
  else if(answer=="d") {
    return "No comment"
  }
}

let form = document.getElementById("my-form");
console.log(form);

const message = document.getElementById("ia-message");
const counter = document.getElementById("counter");
let count = 0;

form.addEventListener("submit", (event) => {
  const input = form.querySelector("#user-answer");
  answer = input.value
  message.innerHTML = createMessage(answer);
  count = count += 1
  counter.innerHTML = count;
});

Highcharts.getJSON(
  "https://cdn.jsdelivr.net/gh/highcharts/highcharts@v7.0.0/samples/data/range.json",
  function (data) {
    Highcharts.chart("container", {
      chart: {
        type: "arearange",
        zoomType: "x",
        scrollablePlotArea: {
          minWidth: 600,
          scrollPositionX: 1
        }
      },

      title: {
        text: "Temperature variation by day"
      },

      xAxis: {
        type: "datetime",
        accessibility: {
          rangeDescription: "Range: Jan 1st 2017 to Dec 31 2017."
        }
      },

      yAxis: {
        title: {
          text: null
        }
      },

      tooltip: {
        crosshairs: true,
        shared: true,
        valueSuffix: "°C",
        xDateFormat: "%A, %b %e"
      },

      legend: {
        enabled: false
      },

      series: [
        {
          name: "Temperatures",
          data: data
        }
      ]
    });
  }
);
