import React, { Component } from "react";
import styled from 'styled-components'
import * as palette from "../../config/Style";

const Input = styled.input`
    display: inline-flex;
    width: 100%;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border-radius: .25rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    border-radius: 2rem;
    border: 2px solid #333;
    
    &.error {
      border: 2px solid red;
    }
`;

const FieldSet = styled.fieldset`
    border: none;
    width: 100%;
    display: flex;
    justify-content: center;
    
    button {
      background: #328bff54;
      border: 1px solid #328bff;
      box-shadow: 3px 4px 0px #328bff;
      color:black;
      font-size: 1.25rem;
      font-weight: 600;
      cursor: pointer;
      padding: 10px 24px;
      margin-top: 2rem;
      opacity: .85;
      transition: box-shadow .15s ease-in-out;
    }
    button:hover {
      opacity: 1;
    }
    button:active {
      box-shadow: 0px 0px 0px #328bff;
    }
`;

const Label = styled.label`
  position: absolute;
  height: 1px; width: 1px;
  overflow: hidden;
  clip: rect(1px, 1px, 1px, 1px);
`;

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    Height: 100%;
    background-color: #000000ed;
`;

const Form = styled.form`
  z-index: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 800px;
  
  p {
      font-size: 1.25rem;
    }
`;

const Content = styled.div`
  max-width: ${palette.MAX_WIDTH_PROJECT_DETAIL}px;
  margin: 0 auto;
  color: ${palette.SECONDARY_COLOR};
  background: white;
  margin-top: 4rem;
  p {
    font-size: 1.25rem;
    margin-top: 1rem;
  }
  h2 {
    font-size: 2.5rem;
    margin-top: 3rem;
    color: #333;
    @media (max-width: 1000px) {
      font-size: 2rem;
    }
  }
  h3 {
    font-size: 2rem;
    margin-top: 2rem;
    color: #333;
    @media (max-width: 1000px) {
      font-size: 1.75rem;
    }
  }
  h4 {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  li {
    font-size: 1.25rem;
  }
  video {
    display: flex;
    margin: auto;
  }
  
  .videoWrapper {
    box-shadow: 0 20px 40px rgba(0,0,0,0.05), 0 15px 12px rgba(0,0,0,0.05);
    position: relative;
    padding-bottom: 56.25%; /* 16:9 */
    padding-top: 25px;
    height: 0;
    iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
      }
    margin: 3rem 0;
   }
   
  video {
    box-shadow: 0 20px 40px rgba(0,0,0,0.05), 0 15px 12px rgba(0,0,0,0.05);
    max-width: 800px !important;
    margin: 3rem auto;
  }
  .gatsby-resp-image-wrapper {
    // box-shadow: 0 20px 40px rgba(0,0,0,0.05), 0 15px 12px rgba(0,0,0,0.05);
    margin: 3rem 0;
  }
`;

const API = 'https://api.d4isy.com/api/v1/';
// const API = 'http://ec2-54-173-66-215.compute-1.amazonaws.com/api/v1/';
// const API = 'http://localhost:3000/api/v1/';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      password: "",
      projectBody: "",
      loggedIn: false,
      error: false
    };
  }

  validateForm() {
    return this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    fetch(API + this.state.password + '/' + this.props.title.replace(/\s+/g, '-').toLowerCase())
      .then( response => {
        if (!response.ok) {
          this.setState({
            error: true
          });
          throw response
        }
        else return response.json()
      })
      .then( data => {
        if (data.body) {
          this.setState({
            projectBody: data.body,
            loggedIn: true
          });
          this.props.onSignIn();
        }
      })
      .catch( err => {
          console.log(err);
      })
  };

  renderForm() {
    return (
      <Content>
        <Form onSubmit={this.handleSubmit}>
          <h3>Hi there,</h3><p>This project is private. Use the super secret password I gave to view. If you think you should have the password, feel free to <a href={'mailto:whshortridge@gmail.com'}>contact me</a>.</p>
          <FieldSet>
            <Label for={'password'}>Password</Label>
            <Input
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
              id={"password"}
              placeholder={"Super secret password"}
              className={this.state.error? 'error' : ''}
            />
            <button
              type="submit"
            >
              View project
            </button>
          </FieldSet>
        </Form>
      </Content>
    )
  }

  render() {
    return (
      <div className={"Secret"}>
        <div className={"content"}>
          { this.state.loggedIn ?<Content  dangerouslySetInnerHTML={{ __html: this.state.projectBody }} /> : this.renderForm() }
        </div>
        </div>
    );
  }
}
