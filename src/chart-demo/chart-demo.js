import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import DarkUnica from 'highcharts/themes/dark-unica';

//set the theme
DarkUnica(Highcharts);

//highcharts options: set type of chart
// data series, categories can be loaded dynamically if necessary
const options = {
    chart: {
        type: 'areaspline'
    },
    title: {
        text: 'Average spam emails during one week'
    },
    legend: {
        layout: 'vertical',
        align: 'left',
        verticalAlign: 'top',
        x: 150,
        y: 100,
        floating: true,
        borderWidth: 1,
        backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF'
    },
    xAxis: {
        categories: [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
            'Sunday'
        ],
    },
    yAxis: {
        title: {
            text: '# of emails'
        }
    },
    tooltip: {
        shared: true,
        valueSuffix: ' units'
    },
    credits: {
        enabled: false
    },
    plotOptions: {
        areaspline: {
            fillOpacity: 0.5
        }
    },
    series: [{
        name: 'Phishing Emails',
        data: [3, 4, 3, 5, 4, 10, 12]
    }, {
        name: 'Marketing Emails',
        data: [1, 3, 4, 3, 3, 5, 4]
    }]
}

class ChartDemo extends React.Component {

    //render the highcharts component
    render() {
        return (
            <div>
                <HighchartsReact
                    highcharts={Highcharts}
                    options={options}
                />
            </div>
        );
    }
}

export default ChartDemo;