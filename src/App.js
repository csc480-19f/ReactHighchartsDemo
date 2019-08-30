import React, { Component } from 'react';
import ChartDemo from './chart-demo/chart-demo';


/*
For reference: this details how to create a chrome extension in react:
https://veerasundar.com/blog/2018/05/how-to-create-a-chrome-extension-in-react-js/
*/

class App extends Component {
    render() {
        return (
            //inject the highcharts component into the main app page
            <div>
                <ChartDemo></ChartDemo>
            </div>
            
        );
    }
}

export default App;