import React from 'react'
import {Bar, Line} from 'react-chartjs-2'
import GraphComponentTwo from './graphComponentTwo'

const state = {
    labels: ['Django', 'Flask', 'ReactJ.s',
             'Next.Js', 'Vue.Js', 'Gatsby', 'Core-PHP', 'Laravel', 'Vaadin'],
    datasets: [
      {
        label: 'Languages',
        backgroundColor: '#3399ff',
        // backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: [7, 2, 10, 1, 1, 1, 8, 1, 1]
      }
    ]
  }

const GraphComponent = () => {
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
                                text:'Programming language vs Projects developed',
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
                <br/>
                <GraphComponentTwo/>
            </div>
        </div>
    )
}
export default GraphComponent