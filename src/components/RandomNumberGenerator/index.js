// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {num: 0}

  generateRandomNum = () => Math.ceil(Math.random() * 100)

  onClickGenerate = () => {
    const randomNum = this.generateRandomNum()
    this.setState({num: randomNum})
  }

  render() {
    const {num} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Random Number</h1>
          <p className="para">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            type="button"
            className="generate-button"
            onClick={this.onClickGenerate}
          >
            Generate
          </button>
          <p className="random-num">{num}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
