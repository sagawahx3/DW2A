import { useState, useEffect } from "react"
import  BankInstance  from "./Bank"
import { Question } from "./Question"

export function InputQuestion(props){


    function setQuestion(e){

        e.preventDefault()

      let quest_text = document.getElementById('question').value
      let ans1 = document.getElementById('answer1').value
      let ans2 = document.getElementById('answer2').value
      let ans3 = document.getElementById('answer3').value
      let ans4 = document.getElementById('answer4').value
      let c_ans = document.getElementById('correct-answer').value

      BankInstance.addQuestion(quest_text, ans1, ans2, ans3, ans4, c_ans)
 
     }

     function handleChange(event){
        setState({valu})
     }

     function handleSubmit(event){

        event.preventDefault()

      let quest_text = document.getElementById('question').value
      let ans1 = document.getElementById('answer1').value
      let ans2 = document.getElementById('answer2').value
      let ans3 = document.getElementById('answer3').value
      let ans4 = document.getElementById('answer4').value
      let c_ans = document.getElementById('correct-answer').value

      BankInstance.addQuestion(quest_text, ans1, ans2, ans3, ans4, c_ans)
 
     }

    return(
        <section className = "input-question">

        <form onSubmit={handleSubmit}>

        <h1>Inserir Nova Questão</h1>

        <label for="nome">Questão</label><br />
        <textarea id="question" placeholder="Insira a questão aqui." required="required" name="question" /><br />

        <label >Resposta 1</label><br />
        <input type="text" value={state.value} onChange={handleChange} required="required" /><br />

        <label >Resposta 2</label><br />
        <input type="text" value={state.value} onChange={handleChange} required="required" /><br />

        <label >Resposta 3</label><br />
        <input type="text" value={state.value} onChange={handleChange} required="required" /><br />

        <label >Resposta 4</label><br />
        <input type="text" value={state.value} onChange={handleChange} required="required" /><br />

        <label>Qual é a resposta correta?</label><br />
        <input list="correct-answer"/>
        <datalist id="correct-answer">
        <option value="1"></option>
        <option value="2"></option>
        <option value="3"></option>
        <option value="4"></option>
        </datalist>

        <input type="submit" class="submit-button" onClick = {() => {setQuestion(e)}} value="Enviar" />

        </form>

        </section>
    )
}