import React from 'react'
export default class FilterString extends React.Component {
    constructor(){
        super() 
        this.state = {
            unfilteredArray: ['James', 'Jessica', 'Melody', 'Tyler', 'Blake', 'Jennifer', 'Mark', 'Maddy'],
            userInput: "",
            filteredArray: []
        }

    }

    handleChange(value){
        this.setState({
            userInput: value
        })
    }

    filterArray(paramUserInput){
        let unfilteredArray = this.state.unfilteredArray
        let filteredArray = []

        for (let i = 0; i < unfilteredArray.length; i++){
            if (unfilteredArray[i].includes(paramUserInput)){
                filteredArray.push(unfilteredArray[i])
            }
        }

        this.setState({filteredArray: filteredArray})
    }

    render () {
        return (
            <div className="puzzleBox filterStringPB">
                <h4> Filter String </h4>
                <span className="puzzleText">Original Array: {JSON.stringify(this.state.unfilteredArray, null, 10)}</span>
                <input className="inputLine" onChange={e => {this.handleChange(e.target.value)}}></input>
                <button className="confirmationButton" onClick={() => this.filterArray(this.state.userInput)}> Filter </button>
                <span className="resultsBox filterStringRB">Filtered Array: {JSON.stringify(this.state.filteredArray, null, 10)}</span>
            </div>
        )
    }
}