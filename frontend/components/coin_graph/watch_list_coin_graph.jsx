import React from 'react';
import Chart from 'chart.js'
import { Line } from "react-chartjs-2";

import {
    Route,
    Redirect,
    Switch,
    Link,
    withRouter,
} from 'react-router-dom';

const colors = ['rgb(247,153,40,1)','rgb(98,126,234,1)','rgb(177,179,180)','rgb(0,0,0,1)','rgb(141,195,81)','rgb(34,34,34)']
//
class WatchListCoinGraph extends React.Component {
    constructor(props) {
        super(props)
    }

    xAxis() {
        const prices = this.props.coin.prices
        var times = []
        if (!!prices) {
            prices.forEach(el => {
                const d = new Date(el[0])
                times.push(d.toLocaleTimeString())
            })
        }
        return times
    }

    yAxis() {
        const prices = this.props.coin.prices
        var values = []
        if (!!prices) {
            prices.forEach(el => values.push(el[1].toFixed(2)))
        }
        return values
    }

    graphData() {
        const data = {
            labels: this.xAxis(),
            datasets: [
                {
                    label: '',
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: 'rgba(75,192,192,0.4)',
                    borderColor: `${colors[this.props.index]}`,
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    borderWidth: 2,
                    pointBorderColor: `${colors[this.props.index]}`,
                    pointBackgroundColor: `${colors[this.props.index]}`,
                    pointRadius: 0,
                    pointHoverRadius: 1,
                    pointHoverBackgroundColor: 'rgba(44, 130, 201, 1)',
                    pointHoverBorderColor: 'rgba(44, 130, 201, 1)',
                    pointHoverBorderWidth: 1,
                    pointHitRadius: 10,
                    data: this.yAxis(),
                },
            ],

        };
        return data
    }

    graphOptions() {
        const options = {
            responsive:true,
            legend: {
                display: false
            },
            scales: {
                xAxes: [{
                    display:false,
                    ticks: {
                        autoSkip: true,
                        maxTicksLimit: 3,
                        maxRotation: 0,
                        minRotation: 0
                    },
                    gridLines: {
                        display: false,
                        drawBorder: false,
                        drawOnChartArea: false
                    }
                }],
                yAxes: [{
                    ticks: {
                        display: false
                    },
                    gridLines: {
                        display: false,
                        drawBorder: false,
                        drawOnChartArea: false
                    }
                }]
            }
        }


        return options
    }

    render() {
        return (
            <div className='top-six-graph-graph'>
                <div className='coin-title'>{this.props.id}</div>
                <Line  height={100} className='top-six-graph-graph'data={this.graphData()} options={this.graphOptions()} />
            </div>
        )
    }
}


export default withRouter(WatchListCoinGraph)