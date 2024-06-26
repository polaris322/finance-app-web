import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import highcharts3d from 'highcharts/highcharts-3d';
highcharts3d(Highcharts);

export const GastoCategoriesChart = () => {
    const pieChartOptions = {
        chart: {
            type: 'pie',
            backgroundColor: '#5cdcd2',
            spacing: [16, 0, 16, 0],
            height: '340px'
        },
        legend: {
            align: 'middle', // Horizontal alignment of the legend
            verticalAlign: 'right', // Vertical alignment of the legend
            layout: 'vertical',
            padding: 5, // Reduce inner padding of legend box
            itemMarginTop: 2, // Reduce vertical spacing between legend items
            itemMarginBottom: 2,
            symbolPadding: 5 // Increase horizontal spacing within legend
        },
        title: {
            text: 'EGRESOS POR CATEGORIAS',
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
                    format: '{point.percentage:.1f}%',
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
                    name: 'Vehiculos',
                    y: 32000,
                    color: '#374649' // Set custom color for this data point
                },
                {
                    name: 'Alimentacion',
                    y: 35000,
                    color: '#fd625e' // Set custom color for this data point
                },
                {
                    name: 'Vivenda',
                    y: 32000,
                    color: '#f2c80f' // Set custom color for this data point
                },
                {
                    name: 'Prestamos',
                    y: 35000,
                    color: '#5f6b6d' // Set custom color for this data point
                },
                {
                    name: 'Educacion',
                    y: 32000,
                    color: '#8ad4eb' // Set custom color for this data point
                },
                {
                    name: 'Salud',
                    y: 35000,
                    color: '#01b8aa' // Set custom color for this data point
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