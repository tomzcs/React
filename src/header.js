import React, { Component } from 'react';

class Header extends Component{
    constructor(){
        super()
        this.state={
            name:"Unlike",
            count:0
        }
    }
    render(){
        // setTimeout(() => {
        //     this.setState({name:"Like"})
        // }, 1000)

        // setInterval(()=>{
        //     this.setState({count:this.state.count+1})
        // },1000)
      return(
        <div>
          <h1>Header Tomz4TH </h1>
        </div>
      )
    }
  }
  export default Header;