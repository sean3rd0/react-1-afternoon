import React from "react"
class Sum extends React.Component{

    constructor(){
        super()

        this.state = {
            num1: 0,
            num2: 0,
            sum: null
        }

    }

    handleChangeNum1(value){
        this.setState({num1: +value})
    }

    handleChangeNum2(value){
        this.setState({num2: +value})
    }

    addNums(paramNum1, paramNum2){
        this.setState({
            sum: paramNum1 + paramNum2
        })
    }

    render() {
        return (
            <div className="puzzleBox sumPB">
                <h4> Sum </h4>
                <input className="inputLine" type="number" onChange={e => this.handleChangeNum1(e.target.value)}></input>
                <input className="inputLine" type="number" onChange={e => this.handleChangeNum2(e.target.value)}></input>
                <button className="confirmationButton" onClick={() => {this.addNums(this.state.num1, this.state.num2)}}> Add </button>
                <span className="resultsBox"> Sum: {this.state.sum} </span>
            </div>
        )
    }
} 
export default Sum