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


class WatchListCoinGraph extends React.Component {
    constructor(props) {
        super(props)
    }

    //componentDidUnmount

    xAxis() {
        const prices = this.props.topSixCoinsHistoricalData[this.props.index].prices
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
        const prices = this.props.topSixCoinsHistoricalData[this.props.index].prices
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
                    lineTension: 0.01,
                    backgroundColor: 'rgba(75,192,192,0.4)',
                    borderColor: 'rgba(44, 130, 201, 1)',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: 'rgba(44, 130, 201, 1)',
                    pointBackgroundColor: 'rgba(44, 130, 201, 1)',
                    pointBorderWidth: 1,
                    pointHoverRadius: 1,
                    pointHoverBackgroundColor: 'rgba(44, 130, 201, 1)',
                    pointHoverBorderColor: 'rgba(44, 130, 201, 1)',
                    pointHoverBorderWidth: 1,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: this.yAxis(),
                },
            ],

        };
        return data
    }

    graphOptions() {
        const options = {
            legend: {
                display: false
            },
            scales: {
                xAxes: [{
                    ticks: {
                        autoSkip: true,
                        maxTicksLimit: 3,
                        maxRotation: 0,
                        minRotation: 0
                    },
                    gridLines: {
                        display: true,
                        drawBorder: true,
                        drawOnChartArea: false
                    }
                }],
                yAxes: [{
                    ticks: {
                        display: false
                    },
                    gridLines: {
                        display: true,
                        drawBorder: true,
                        drawOnChartArea: false
                    }
                }]
            }
        }


        return options
    }


    render() {
        if (this.props.topSixCoinsHistoricalData.length < this.props.index+1) {
            return <div>graph loading...</div>
        }
        return (
            <div>
                <div>{'hellooo'}</div>
                <div className='coin-title'>{this.props.id}</div>
                <Line data={this.graphData()} options={this.graphOptions()} />
                <div></div>
            </div>
        )
    }
}


export default withRouter(WatchListCoinGraph)