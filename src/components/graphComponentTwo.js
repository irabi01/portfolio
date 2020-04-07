import React from 'react'
import {Bar, Line} from 'react-chartjs-2'

const state = {
    labels: ['2016', '2017', '2018',
             '2019', '2020'],
    datasets: [
      {
        label: 'Projects',
        backgroundColor: '#3399ff',
        // backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: [3, 5, 4, 13,3]
      }
    ]
  }

const GraphComponentTwo = () => {
    return (
        <div className="graph_component">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        <div className="content">
                        <Line
                            data={state}
                            options={{
                                title:{
                                display:true,
                                text:'Years vs Number of Projects',
                                fontSize:20,
                                fontFamily:'monospace'
                                },
                                legend:{
                                display:true,
                                position:'top'
                                }
                            }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default GraphComponentTwo