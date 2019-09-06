import React, {Component} from 'react'
export default class EvenAndOdd extends Component {
    constructor(){
        super() 

        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ""
        }
    }

    handlerChangeableness(param) {
        this.setState({ userInput: param })
    }

    assignEvensAndOdds(param){
        let splitArray = param.split(',')
        let evens = []
        let odds = []

        for (let i = 0; i < param.length; i++){
            if (splitArray[i] % 2 === 0
                ){evens.push(+splitArray[i])
                }else if (
                    splitArray[i] % 2 === 1
                ){odds.push(+splitArray[i])}
        }
        this.setState({evenArray: evens, oddArray: odds})
    }

    render () {
        return (
            <div className="puzzleBox evenAndOddPB">
                <h4>Evens and Odds</h4>
                {/*<input className="inputLine" onChange={this.setState((newData) => {return {userInput: newData}})}></input> {/*this is what I had put. I don't know if this works, but they suggested I do the handleChange method, as I've written on the line below.*/}
                <input className="inputLine" onChange={ (event) => this.handlerChangeableness(event.target.value)}></input>                
                <button className="confirmationButton" onClick={ () => { this.assignEvensAndOdds(this.state.userInput)}}> Split </button>
                <span className="resultsBox"> Evens: {JSON.stringify(this.state.evenArray)} </span>
                <span className="resultsBox"> Odds: {JSON.stringify(this.state.oddArray)} </span>
            </div>
        )
    }
}