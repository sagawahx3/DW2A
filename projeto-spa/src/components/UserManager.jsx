import { useState, useEffect } from "react"
import  BankInstance  from "./Bank"
import { Question } from "./Question"
import React from "react";

let instance;

class User{

  answeredQuestions = []
  rightQuestions = []
  wrongQuestions = []


    constructor(){
      if(instance)
      throw new Error("Cannot create a new instance of this class")

      instance = this;
    }

}

const UserInstance = new User();

export default UserInstance;

export class UserManager extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        totalQuestions: UserInstance.answeredQuestions.length,
        rightAnswered: UserInstance.rightQuestions.length,
        wrongAnswered: UserInstance.wrongQuestions.length
      };
  
    }
  
    render() {
      return (
        <>
        <h1>Respostas totais: {this.state.totalQuestions}</h1>
        <br />
        <h1>Respostas corretas: {this.state.rightAnswered}</h1>
        <br />
        <h1>Respostas incorretas: {this.state.wrongAnswered}</h1>
        <br />
        </>
      );
    }
  }
