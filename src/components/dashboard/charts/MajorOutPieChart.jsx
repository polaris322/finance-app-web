import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import highcharts3d from 'highcharts/highcharts-3d';
highcharts3d(Highcharts);

export const MajorOutPieChart = () => {
    const pieChartOptions = {
        credits: {
            enabled: false
        },
        chart: {
            type: 'pie',
            backgroundColor: '#5cdcd2',
            spacing: [16, 0, 16, 0],
            height: '340px'
        },
        legend: {
            enabled: false
        },
        title: {
            enabled: false,
            text: ''
        },
        accessibility: {
            enabled: false,
            point: {
                valueSuffix: '%'
            }
        },
        tooltip: {
            pointFormat: '<b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            series: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: [{
                    enabled: true,
                    distance: 20,
                    style: {
                        fontSize: '1em',
                        textOutline: 'none'
                    },
                }, {
                    enabled: true,
                    distance: -40,
                    // eslint-disable-next-line
                    format: '${point.y}',
                    style: {
                        fontSize: '1em',
                        textOutline: 'none',
                        opacity: 1,
                        color: '#fff'
                    },
                    filter: {
                        operator: '>',
                        property: 'percentage',
                        value: 10
                    }
                }]
            }
        },
        series: [{
            type: 'pie',
            colorByPoint: true,
            data: [
                {
                    name: 'Vehiculo',
                    y: 500,
                    color: '#7c9441' // Set custom color for this data point
                },
                {
                    name: 'Comida',
                    y: 250,
                    color: '#3e71c5' // Set custom color for this data point
                },
                {
                    name: 'Casa',
                    y: 1000,
                    color: '#df7827' // Set custom color for this data point
                },
            ]
        }]
    };

    return (
        <div>
            <HighchartsReact highcharts={Highcharts} options={pieChartOptions} />
        </div>
    );
};