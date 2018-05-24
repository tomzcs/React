import React, { Component } from 'react';
import Routers from './Routers';
import { Button, Grid , Col, Row } from 'react-bootstrap';

//สร้าง componant - JSX
class App extends Component {
  constructor(){
    super()
    this.state={
      data:[],
      message:"Like",
      type:""
    }
    this.changeMessage = this.changeMessage.bind(this)
    this.insertData = this.insertData.bind(this)
  }

  changeMessage(){
    this.setState({message:"Unlike"})
  }
  insertData(){
    var item="React"
    var arr=this.state.data
    arr.push(item)
    this.setState({data:arr})
  }
  onChange(event){
    this.setState({type:event.target.value})
  }


  render(){
    return(
      
      <div>
        {/* <Header/>
        <Content title="title content" name="title name" price="Free"/>
        <Footer/>
        <button onClick={this.changeMessage}>{this.state.message}</button>
        <p>{this.state.data}</p>
        <button onClick={this.insertData}>insert</button>
        <br/>
        <p>welcome : {this.state.type}</p>
        <input type="text" onChange={this.onChange.bind(this)}/> */}
        <h1>Tomz ChaiYot</h1>
        <h1><a href="/">Header</a></h1>
        <h1><a href="/content">Content</a></h1>
        <h1><a href="/footer">Footer</a></h1>
        <Grid>
        <Row className="show-grid">
          <Col xs={12} md={8}>
            <Routers />
          </Col>
          <Col xs={6} md={4}>
            <Button bsStyle="success">Success</Button>
          </Col>
        </Row>
        </Grid>
        
      </div>
    );
  }
}



export default App;