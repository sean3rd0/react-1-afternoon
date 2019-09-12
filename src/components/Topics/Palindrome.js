import React from 'react'
class Palindrome extends React.Component{

    constructor(){
        super()
        
        this.state = {
            userInput: "",
            palindrome: ""
        }

    }

    handleChange(value) {
        this.setState({
            userInput: value
        })
    }

isPalindrome(uI) {
        let userInput = this.state.userInput;
        let splitUI = userInput.split("");
        let reversedSUI = splitUI.reverse();
        let joinedRSUI = reversedSUI.join("");


        if ( uI === joinedRSUI){
            this.setState({
                palindrome: 'True'
            }) 
        } else {
            this.setState({
                palindrome: 'False'
            })
        }
    }

    render () {
        return (
            <div className="puzzleBox palindromePB">
                <h4> Palindrome </h4>
                <input className="inputLine" onChange={e => this.handleChange(e.target.value)}></input>
                <button className="confirmationButton" onClick={() => {this.isPalindrome(this.state.userInput)}}> Check </button>
                <span className="resultsBox">Palindrome: {this.state.palindrome}</span>
            </div>
        )
    }
}
export default Palindrome