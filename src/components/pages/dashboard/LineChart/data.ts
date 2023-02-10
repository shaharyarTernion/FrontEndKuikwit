// eslint-disable-next-line @typescript-eslint/no-explicit-any
const chartData: any = {
  height: 295,
  series: [
    {
      name: 'Desktops',
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148,213,13,3],
    },
  ],

  options: {
    chart: {
      height: 350,
      type: 'line',
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'straight',
    },
    // title: {
    //   text: 'Product Trends by Month',
    //   align: 'left',
    // },
    colors: ['#008E8E'],
    // grid: {
    //   row: {
    //     colors: ['#EFEFEF', '#EFEFEF'], // takes an array which will be repeated on columns
    //     // opacity: 0.5,
    //   },
    // },
    xaxis: {
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
        'Dec'
      ],
    },
  },
}
export default chartData
