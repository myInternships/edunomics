import React from 'react';
import Plot from 'react-plotly.js';
import CustomPlot from './components/plot';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: [1, 2, 3],
      y: [1, 2, 3],
      coeff: 0.75,
      height: 5
    }
  }

  render() {
    return (
      <div>
        <div class="jumbotron jumbotron-fluid">
          <h1 class="display-4 justify-content-center text-center">Edunomics Task Phase</h1>
        </div>

        
          {/* Plot */}
          <div class="justify-content-center text-center">
            <CustomPlot
              x={this.state.x}
              y={this.state.y}
            />
          </div>

          {/* Controller */}
          <div class="card mx-auto card-body" style={{ width: 500 }}>

            {/* coeff of restitution */}
            <div class="form-group">
              <label for="coeff">Coefficient of restitution</label>
              <input type="text" class="form-control" id="coeff" aria-describedby="emailHelp" placeholder="Enter coefficient of restitution"
                value={this.state.coeff} onChange={(e) => {
                  this.setState({ coeff: e.target.value })
                }}
              />
            </div>

            {/* initial height */}
            <div class="form-group">
              <label for="height">Initial Height</label>
              <input type="text" class="form-control" id="height" aria-describedby="emailHelp" placeholder="Enter initial height"
                value={this.state.height} onChange={(e) => {
                  this.setState({ height: e.target.value })
                }}
              />
            </div>

            {/* submit button */}
            <button class="btn btn-danger" onClick={
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

        

      </div>
    );
  }
}

export default App