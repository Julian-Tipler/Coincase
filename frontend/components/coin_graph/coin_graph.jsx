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


class CoinGraph extends React.Component{
    constructor(props) {  
      super(props)
      this.state = {
          coinHistoricalData: {},
          counter : 0
      }
    }

    componentDidMount() {
        this.props.fetchCoinHistoricalData(this.props.id)
    }

    componentDidUpdate(prevProps) {
        if (prevProps.coinHistoricalData !== this.props.coinHistoricalData && this.state.counter < 1) {
            this.setState({
                coinHistoricalData: this.props.coinHistoricalData
            })
            this.state.counter =1
        }
    }

    xAxis() {
        const prices = this.state.coinHistoricalData.prices
        var times=[]
        if (!!prices) {
            prices.forEach(el=> {
                const d = new Date(el[0])
                times.push(d.toLocaleTimeString())
            })
        }
        return times
    }

    yAxis() {
        const prices = this.state.coinHistoricalData.prices
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
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: 'rgba(44, 130, 201, 1)',
                    pointHoverBorderColor: 'rgba(44, 130, 201, 1)',
                    pointHoverBorderWidth:1,
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
                        maxTicksLimit: 6,
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
       return (
        <div>
            <Line data={this.graphData()} options={this.graphOptions()}/>
            {/* <div>
                <div>
                    <div>Market Cap</div>
                    <div></div>
                </div>
                <div>
                    <div>Volume(24 hours) </div>
                    <div></div>
                </div>
                <div>
                    <div>Circulating supply</div>
                    <div></div>
                </div>
            </div> */}
            <div></div>
        </div>
       )
   }
}


export default withRouter(CoinGraph)