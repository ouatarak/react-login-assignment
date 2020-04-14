import React from 'react';
import './App.css';


interface IPersonProps {
    firstName: string,
    lastName: string,
    userName: string,
    email: string,
    isLogginActive: boolean
  }
  
  interface IPersonState {
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    isLogginActive: false
  }
  
  
  
  export default class SpecialLogin extends React.Component<IPersonProps, IPersonState> {
    constructor(props: IPersonProps) {
      super(props);
      this.state = {
        firstName: '',
        lastName: '',
        userName: '',
        email: '',
        isLogginActive: false
      }
  
      this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
      this.handleChangeLastName = this.handleChangeLastName.bind(this);
      this.handleChangeUserName = this.handleChangeUserName.bind(this);
      this.handleChangeEmail = this.handleChangeEmail.bind(this);
      this.handleChangeisLogginActive = this.handleChangeisLogginActive.bind(this);
    }   
    
    handleChangeFirstName(event: any) {
        this.setState({ firstName: event.target.value })
      }
    handleChangeLastName(event: any) {
        this.setState({ lastName: event.target.value })
      }
    handleChangeUserName(event: any) {
        this.setState({ userName: event.target.value })
      }
    handleChangeEmail(event: any) {
        this.setState({ email: event.target.value })
      }
      handleChangeisLogginActive(event: any) {
        this.setState({ isLogginActive: event.target.value })
      }
    
      render() {
        
        return (
          <form>
            <input type="text" value={this.state.firstName} onChange={this.handleChangeFirstName} />
            <input type="text" value={this.state.lastName} onChange={this.handleChangeLastName} />
            <input type="text" value={this.state.userName} onChange={this.handleChangeUserName} />
            <input type="text" value={this.state.email} onChange={this.handleChangeEmail} />  
          </form>
        )
      }
    }