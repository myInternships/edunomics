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
                    mode: 'lines+markers',
                    marker: { color: 'red' },
                }
            ]}

            layout={{ width: 320, height: 240, title: 'Plot' }}
        />
    )
}

export default CustomPlot
