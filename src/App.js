import React from 'react'
import axios from 'axios'

import './App.css'

class App extends React.Component{
    state={advice: ''}
    


    componentDidMount(){
        this.getAdvice(); 
    }

    getAdvice = () =>{
       axios.get('https://api.adviceslip.com/advice')
       .then((response) => {
           const {advice} = response.data.slip
           this.setState({ advice})
           console.log(advice)
       }).catch((error) => {
           console.error(error)
       }); 
    }

    render(){
        const {advice} = this.state;
        return(
            <div className="app">
                <div className="card">
                    <h1 className="heading">{advice} </h1>    
                    <button className="button" onClick={this.getAdvice}>
                        <span>Give me advice</span>    
                    </button>
                </div>
            </div>
        ); 
    }
}

export default App;