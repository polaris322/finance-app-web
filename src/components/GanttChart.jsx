import React, {useEffect, useMemo, useState} from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import HighchartsGantt from 'highcharts/modules/gantt';

// Initialize the Gantt module
HighchartsGantt(Highcharts);

const GanttChart = ({data}) => {
    const { firstDay, lastDay } = useMemo(() => {
        const now = new Date();
        const firstDay = new Date(now.getFullYear(), now.getMonth(), 1);
        const lastDay = new Date(now.getFullYear(), now.getMonth() + 1, 0);
        return { firstDay, lastDay };
    }, []);

    const [options, setOptions] = useState({
        xAxis: {
            min: firstDay.getTime(),
            max: lastDay.getTime(),
            type: 'datetime',
            labels: {
                format: '{value:%d}', // Show only the day of the month
            },
            tickInterval: 24 * 3600 * 1000, // One day
        },
        series: [{
            data: data.map((item) => {
                return {
                    name: item.name,
                    start: new Date(item.start_date).getTime(),
                    end: new Date(item.end_date).getTime()
                }
            })
        }]
    });

    useEffect(() => {
        setOptions({
            xAxis: {
                min: firstDay.getTime(),
                max: lastDay.getTime(),
                type: 'datetime',
                labels: {
                    format: '{value:%d}', // Show only the day of the month
                },
                tickInterval: 24 * 3600 * 1000, // One day
            },
            series: [{
                data: data.map((item) => {
                    return {
                        name: item.name,
                        start: new Date(item.start_date).getTime(),
                        end: new Date(item.end_date).getTime()
                    }
                })
            }]
        });
    }, [data, firstDay, lastDay]);

    return (
        <HighchartsReact
            highcharts={Highcharts}
            options={options}
            constructorType={'ganttChart'}
        />
    );
};

export default GanttChart;