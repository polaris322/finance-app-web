import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import {NumberFormater} from "../../../utils";

const options = {
    chart: {
        type: 'bar',
        backgroundColor: '#5cdcd2',
        height: '340px'
    },
    accessibility: {
        enabled: false
    },
    title: {
        text: 'PENDIENTE POR PAGAR',
        align: 'right'
    },
    xAxis: {
        categories: ['Prestamo Banreservas', 'Prestamo Scotiabank', 'Compra de la casa', 'Combusjtible', 'Gas', 'Ofrenda Lglesia', 'Actividad Flores'],
        title: {
            text: null
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: '',
            align: 'high'
        },
        lineWidth: 0,
        labels: {
            enabled: false
        },
        tickLength: 0
    },
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: true,
                formatter: function() {
                    return NumberFormater.format(this.y); // Display the category name as the label
                }
            }
        }
    },
    legend: {
        enabled: false // Set to false to hide the legend
    },
    series: [{
        name: 'Value',
        data: [5000, 3000, 4500, 3000, 3800, 5000, 3200],
        color: '#d3712c'
    }]
};

const PendingPaymentBarChart = () => {
    return (
        <div>
            <HighchartsReact
                highcharts={Highcharts}
                options={options}
            />
        </div>
    );
};

export default PendingPaymentBarChart;