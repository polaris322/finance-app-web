import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import highcharts3d from 'highcharts/highcharts-3d';
highcharts3d(Highcharts);

export const Cumpliemiento3DChart = ({paid, pending}) => {
    const pieChartOptions = {
        chart: {
            type: 'pie',
            backgroundColor: '#5cdcd2',
            spacing: [16, 0, 0, 0],
            options3d: {
                enabled: true,
                alpha: 45,
                beta: 0
            },
            height: '340px'
        },
        title: {
            text: 'CUMPLIEMIENTO',
            align: 'right'
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
            pie: {
                showInLegend: true,
                allowPointSelect: true,
                cursor: 'pointer',
                depth: 40,
                dataLabels: [{
                    enabled: true,
                    distance: -50,
                    format: '{point.percentage:.1f}% <br>={point.y}',
                    style: {
                        fontSize: '1.2em',
                        color: '#fff',
                        textOutline: 'none',
                        opacity: 1
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
                    name: 'Pendiente por pagar',
                    y: pending,
                    color: '#fa400f' // Set custom color for this data point
                },
                {
                    name: 'Total pagado',
                    y: paid,
                    color: '#004382' // Set custom color for this data point
                }
            ]
        }]
    };

    return (
        <div>
            <HighchartsReact highcharts={Highcharts} options={pieChartOptions} />
        </div>
    );
};