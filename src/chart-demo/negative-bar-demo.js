import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

var categories = [
    'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'
];

//highcharts options: set type of chart
// data series, categories can be loaded dynamically if necessary
const options = {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Emails Sent And Received'
    },
    xAxis: [{
        categories: categories,
        reversed: false,
        labels: {
            step: 1
        }
    }, { // mirror axis on right side
        opposite: true,
        reversed: false,
        categories: categories,
        linkedTo: 0,
        labels: {
            step: 1
        }
    }],
    yAxis: {
        title: {
            text: null
        },
        labels: {
            formatter: function () {
                return Math.abs(this.value) + '%';
            }
        }
    },

    plotOptions: {
        series: {
            stacking: 'normal'
        }
    },

    series: [{
        name: 'Sent',
        data: [
            -5, -10, -20, -12, -18, -20, -3
        ]
    }, {
        name: 'Received',
        data: [
            15, 30, 45, 24, 19, 5, 15
        ]
    }]
}

class NegativeBarDemo extends React.Component {

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

export default NegativeBarDemo;