import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import highcharts3d from 'highcharts/highcharts-3d';
highcharts3d(Highcharts);

export const SaturationChart = ({income, outcome}) => {
    const pieChartOptions = {
        chart: {
            type: 'pie',
            backgroundColor: '#5cdcd2',
            spacing: [16, 0, 16, 0],
            height: '340px'
        },
        credits: {
            enabled: false
        },
        legend: {
            padding: 5, // Reduce inner padding of legend box
            itemMarginTop: 2, // Reduce vertical spacing between legend items
            itemMarginBottom: 2,
            symbolPadding: 5 // Increase horizontal spacing within legend
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
                innerSize: '60%',
                dataLabels: [{
                    enabled: true,
                    distance: -30,
                    // eslint-disable-next-line
                    format: '${point.y}',
                    style: {
                        fontSize: '1em',
                        color: '#000',
                        textOutline: 'none',
                        opacity: 1,
                        fontWeight: 600
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
                    color: '#618a00' // Set custom color for this data point
                },
                {
                    name: 'Egreso',
                    y: outcome,
                    color: '#fa400f' // Set custom color for this data point
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