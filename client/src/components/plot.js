import React from 'react'
import Plot from 'react-plotly.js'

const CustomPlot = ({ x, y }) => {
    return (
        <Plot
            data={[
                {
                    x: x,
                    y: y,
                    type: 'line',
                    // mode: 'lines+markers',
                    marker: { color: 'blue' },
                }
            ]}

            layout={{ width: "500px", height: "500px", title: 'Plot' }}
        />
    )
}

export default CustomPlot
