// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

//받아와야 하는 변수
//시간대별 예약 수를 저장하는 배열입니다.
//dataPerTime[0] = 방문시간이 11:00~11:59인 예약의 수
//dataPerTime[1] = 방문 시간이 12:00~12:59인 예약의 수
//. . .
//dataPerTime[9] = 방문 시간이 20:00~20:59인 예약의 수
var dataPerTime = new Array(10);

//월별 예약 수를 저장하는 배열입니다.
var dataPerMonth = new Array(10);


//벡엔드에서 값을 받아와 변수의 값을 초기화한다.
//현재는 임의의 값으로 설정해 두었습니다.
dataPerTime = [10, 12, 15, 9, 20, 16, 10, 11, 18, 10];
dataPerMonth = [500, 350, 400, 680, 500, 400, 600, 400, 500, 650];
labelPerMonth = [1,2,3,4,5,6,7,8,9,10];


// 시간대별 통계
var ctx = document.getElementById("myBarChart_time");
var myLineChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00"],
    datasets: [{
      label: "예약",
      backgroundColor: "rgba(54,141,210,1)",
      borderColor: "rgba(2,117,216,1)",
      data: dataPerTime,
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'hour'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 10
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 50,
          maxTicksLimit: 20
        },
        gridLines: {
          display: true
        }
      }],
    },
    legend: {
      display: false
    }
  }
});

// 월별 통계
var ctx = document.getElementById("myBarChart_month");
var myLineChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: labelPerMonth,
    datasets: [{
      label: "예약",
      backgroundColor: "rgba(68,139,105,1)",
      borderColor: "rgba(2,117,216,1)",
      data: dataPerMonth,
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'month'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 10
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 1500,
          maxTicksLimit: 20
        },
        gridLines: {
          display: true
        }
      }],
    },
    legend: {
      display: false
    }
  }
});
