import React from "react";
import ChildComponent from "./ChildComponent";

class MyComponent extends React.Component {

  state = {
    firstName: '',
    lastName: '',
    arrJobs: [
      {id: 'abcJob1', title: 'Developers', salary: '500 $'},
      {id: 'abcJob2', title: 'Testers', salary: '400 $'},
      {id: 'abcJob3', title: 'Project Managers', salary: '1900 $'}  
    ]
  }


  /*
    JSX => return block  
    */
  handleChangeFirstName = (event) =>{
    this.setState({
      firstName: event.target.value,
    })
  }
  handleChangeLastName = (event) =>{
    this.setState({
      lastName: event.target.value,
    })
  }
  handleSubmit = (event) =>{
    event.preventDefault()
    console.log('>>>> Check data input: ', this.state)
  }

  render() {
    console.log('>>>Call render: ', this.state)
    return (
      <>
        <form>
          <label htmlFor="fname">First name:</label><br/>
          <input 
          type="text" 
          value={this.state.firstName}
          onChange= {(event) => this.handleChangeFirstName(event)}
          />
          <br/>
          <label htmlFor="lname">Last name:</label><br/>
          <input 
          type="text" 
          value={this.state.lastName}
          onChange={(event)=> this.handleChangeLastName(event)}
          />
          <br/>
          <input type="submit" 
          onClick={(event)=> this.handleSubmit(event)}
          
          />
        </form> 

        <ChildComponent
        name={this.state.firstName}
        age={'21'}
        address={'Ha Noi'}
        arrJobs = {this.state.arrJobs}
         />
        
      </>
    );
  }
}

export default MyComponent;
