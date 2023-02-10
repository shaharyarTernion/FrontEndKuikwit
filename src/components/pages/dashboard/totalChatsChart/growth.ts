// import { ApexOptions } from 'apexcharts'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const chartData: any = {
  height: 295,
  // type: 'bar',
  options: {
    chart: {
      id: 'bar-chart',
      stacked: true,
      toolbar: {
        show: false, //3 lines to download the chart
      },
      zoom: {
        enabled: true,
      },
    },
    colors: ['#4D1277', '#4D1277', '#4D1277', '#4D1277'],
    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            position: 'bottom',
            offsetX: -10,
            offsetY: 0,
          },
        },
      },
    ],
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '30%',
      },
    },
    xaxis: {
      type: 'category',
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
        'Dec',
      ],
    },
    legend: {
      show: true,
      fontSize: '14px',
      fontFamily: `Poppins`,
      position: 'bottom',
      offsetX: 20,
      labels: {
        useSeriesColors: false,
      },
      markers: {
        width: 16,
        height: 16,
        radius: 5,
      },
      itemMargin: {
        horizontal: 15,
        vertical: 8,
      },
    },
    fill: {
      type: 'solid',
    },
    dataLabels: {
      enabled: false,
    },
    grid: {
      xaxis: {
        lines: {
          show: false,
        },
        
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    column: {
      colors: '#4D1277',
      opacity: 0.5,
    },
    padding: {
      top: 0,
      right: 50,
      bottom: 0,
      left: 0,
    },
  },
  series: [
    {
      name: 'Chats',
      data: [35, 125, 35, 35, 35, 80, 35, 20, 35, 45, 15, 75, 23],
    },
    // {
    //   name: 'Loss',
    //   data: [35, 15, 15, 35, 65, 40, 80, 25, 15, 85, 25, 75],
    // },
    // {
    //   name: 'Profit',
    //   data: [35, 145, 35, 35, 20, 105, 100, 10, 65, 45, 30, 10],
    // },
    // {
    //   name: 'Maintenance',
    //   data: [0, 0, 75, 0, 0, 115, 0, 0, 0, 0, 150, 0],
    // },
  ],
}
export default chartData
