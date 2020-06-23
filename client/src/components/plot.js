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

            layout={{ width: 500, height: 500, title: 'Plot' }}
        />
    )
}

export default CustomPlot
