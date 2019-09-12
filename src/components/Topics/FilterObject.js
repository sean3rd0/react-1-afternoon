import React, {Component} from 'react'
export default class FilterObject extends Component {
    constructor(){
        super()
        
        this.state = {
            unFilteredArray: [
                {name: "Michael", hair_color: "Dark Brown", resides_in: "Seattle, WA"}, 
                {make: "Ford", model: "F-250", year: 1976}, 
                {artist: "Morphine", album: "The Cure for Pain", title: "In Spite of Me"}
            ],
            userInput: "",
            filteredArray: []
        }
    }

    handleChange(value){
        this.setState({userInput: value})
    }

    filterArray(prop) {
        let unFilteredArray = this.state.unFilteredArray
        let filteredArray = []

        for (let i = 0; i < unFilteredArray.length; i++){
            if (unFilteredArray[i].hasOwnProperty(prop)){
                filteredArray.push(unFilteredArray[i]);
            }
        }
        
        this.setState({filteredArray: filteredArray})
    }

    render () {
        return (
            <div className="puzzleBox filterObjectPB">
                <h4> Filter Object </h4>
                <span className="puzzleText"> Original: {JSON.stringify(this.state.unFilteredArray, null, 10)} </span>
                <input className="inputLine" onChange={(e => this.handleChange(e.target.value))}></input>
                <button className="confirmationButton" onClick={() => this.filterArray(this.state.userInput)}> Filter </button>
                <span className="resultsBox filterObjectRB"> Filtered: {JSON.stringify(this.state.filteredArray, null, 10)} </span>
            </div>
        )
    }
}