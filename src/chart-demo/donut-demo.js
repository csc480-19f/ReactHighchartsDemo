import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
const options = {
    chart: {
        type: 'pie',
    },
    title : {
        text: "Emails By Domain"
    },
    plotOptions: {
        pie: {
            borderColor: '#000000',
            innerSize: '60%'
        }
    },
    series: [{
        data: [
            ['@oswego.edu', 70],
            ['@gmail.com', 20],
            ['@amazon.com', 10],
            ]}]
}

class DonutDemo extends React.Component {

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

export default DonutDemo;