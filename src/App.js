import React, { Component } from 'react';
import LineChartDemo from './chart-demo/line-chart-demo';
import HeatMapDemo from './chart-demo/heat-map-demo';
import NegativeBarDemo from './chart-demo/negative-bar-demo';
import SemiCircleDemo from './chart-demo/semi-circle-demo';
import DonutDemo from './chart-demo/donut-demo';

class App extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-light bg-light">
                <div>
                    ____'s Email Analysis
                </div>
                </nav>
                <div class="row">
                    <div class="col-6">
                        <div class="row">
                            <SemiCircleDemo></SemiCircleDemo>
                        </div>
                        <div class="row">
                            <DonutDemo></DonutDemo>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="row">
                            <NegativeBarDemo></NegativeBarDemo>
                        </div>
                        <div class="row">
                            <HeatMapDemo></HeatMapDemo>
                        </div>
                        <div class="row">
                            <LineChartDemo></LineChartDemo>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default App;