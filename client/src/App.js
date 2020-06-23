import React from 'react';
import Plot from 'react-plotly.js';
import CustomPlot from './components/plot';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coeff: 0.75
    }
  }

  render() {
    return (
      <div>
        <CustomPlot
          x={[1, 2, 3]}
          y={[1, 2, 3]}
        />
        <br />
        Coefficient of restitution: <input type="text" onChange={(e) => { 
          this.setState({ coeff: e.target.value }) 
          console.log(this.state)
        }} />
        <br />
        Height: <input type="text" onChange={(e) => { 
          this.setState({ height: e.target.value }) 
          console.log(this.state)
        }} />
        <br />
        <button>Refresh</button>
      </div>
    );
  }
}

export default App