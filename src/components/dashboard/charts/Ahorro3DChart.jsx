import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import highcharts3d from 'highcharts/highcharts-3d';
highcharts3d(Highcharts);

export const Ahorro3DChart = ({income, outcome, ahorro}) => {
    const pieChartOptions = {
        credits: {
            enabled: false
        },
        chart: {
            type: 'pie',
            backgroundColor: '#5cdcd2',
            spacing: [16, 0, 16, 0],
            options3d: {
                enabled: true,
                alpha: 45,
                beta: 0
            },
            height: '340px'
        },
        legend: {
            padding: 5, // Reduce inner padding of legend box
            itemMarginTop: 2, // Reduce vertical spacing between legend items
            itemMarginBottom: 2,
            symbolPadding: 5, // Increase horizontal spacing within legend
            align: 'center', // Horizontal alignment of the legend
            verticalAlign: 'top', // Vertical alignment of the legend
            layout: 'horizontal',
        },
        title: {
            text: '',
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
                    // eslint-disable-next-line
                    format: '${point.y}',
                    style: {
                        fontSize: '1.2em',
                        color: '#000',
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
                    name: 'Ingreso',
                    y: income,
                    color: '#f9ce1f' // Set custom color for this data point
                },
                {
                    name: 'Egreso',
                    y: outcome,
                    color: '#f9400e' // Set custom color for this data point
                },
                {
                    name: 'Ahorro',
                    y: ahorro,
                    color: '#004383' // Set custom color for this data point
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