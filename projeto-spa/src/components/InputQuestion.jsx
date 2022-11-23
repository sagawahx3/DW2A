import { useState, useEffect } from "react"
import  BankInstance  from "./Bank"
import { Question } from "./Question"
import React from "react";

export class QuestionForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        questionText: 'Insira a questão aqui',
        answer1: 'Resposta 1',
        answer2: 'Resposta 2',
        answer3: 'Resposta 3',
        answer4: 'Resposta 4'
      };
  
      this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleSubmit(event){
        event.preventDefault();
        const target = event.target;
        const value = target.value;

        const name = target.name;

        this.setState({
            [name]: value
          });

          BankInstance.addQuestion(
            this.state.questionText, 
            this.state.answer1, 
            this.state.answer2, 
            this.state.answer3, 
            this.state.answer4,
            this.state.correctAnswer
            )
            
            alert('Questão ' + BankInstance.id + ' adicionada com sucesso!');
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
        <label>
            Questão:
            <input
              name="questionText"
              type="textarea"
              value={this.state.questionText}
              />
          </label>
          <br />
          <label>
            Resposta 1:
            <input
              name="answer1"
              type="textarea"
              value={this.state.answer1}/>
          </label>
          <br />
          <label>
            Resposta 2:
            <input
              name="answer2"
              type="textarea"
              value={this.state.answer2}/>
          </label>
          <br />
          <label>
            Resposta 3:
            <input
              name="answer3"
              type="textarea"
              value={this.state.answer3}/>
          </label>
          <br />
          <label>
            Resposta 4:
            <input
              name="answer4"
              type="textarea"
              value={this.state.answer4}/>
          </label>
          <br />
          <label>
          Resposta correta:
          <select value={this.state.correctAnswer}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </label>
        <br />
        <input type="submit" value="Enviar" />
        </form>
      );
    }
  }
