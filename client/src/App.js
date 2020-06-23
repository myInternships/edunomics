import React from 'react';
import Plot from 'react-plotly.js';
import CustomPlot from './components/plot';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: [1,2,3],
      y: [1,2,3],
      coeff: 0.75,
      height: 5
    }
  }

  render() {
    return (
      <div>
        <CustomPlot
          x={this.state.x}
          y={this.state.y}
        />
        <br />
        Coefficient of restitution: <input type="text" value={this.state.coeff} onChange={(e) => { 
          this.setState({ coeff: e.target.value })
        }} />
        <br />
        Height: <input type="text" value={this.state.height} onChange={(e) => { 
          this.setState({ height: e.target.value })
        }} />
        <br />
        <button onClick={
          () => {

            axios.post('/calculate', {
              height: this.state.height || 5,
              coeff: this.state.coeff || 0.75
            }).then(
              (object) => {
                var data = object.data
                this.setState(
                  {
                    x: data['graph']['time'],
                    y: data['graph']['height'],
                  }
                )
              }
            )
          }
        }>Plot</button>
      </div>
    );
  }
}

export default App