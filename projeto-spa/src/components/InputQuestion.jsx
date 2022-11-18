import { useState, useEffect } from "react"
import { Bank } from "./Bank"
import { Question } from "./Question"

export function InputQuestion(props){

    const bank = props.bank

    function setQuestion(e){

        e.preventDefault()

      let quest_text = document.getElementById('question')
      let ans1 = document.getElementById('answer1')
      let ans2 = document.getElementById('answer2')
      let ans3 = document.getElementById('answer3')
      let ans4 = document.getElementById('answer4')
      let c_ans = document.getElementById('correct-answer')

      bank.addQuestion()
 
     }

    return(
        <section className = "input-question">

        <form name="question-form">

        <h1>Inserir Nova Questão</h1>
            
        <textarea id="question" placeholder="Insira a questão aqui." required="required" name="question" />
        <label for="nome">Questão</label>

        <input type="text" id="answer1" placeholder="Insira a resposta 1 aqui." required="required" name="answer1" />
        <label for="answer1">Resposta 1</label>

        <input type="text" id="answer2" placeholder="Insira a resposta 2 aqui." required="required" name="answer2" />
        <label for="answer1">Resposta 2</label>

        <input type="text" id="answer3" placeholder="Insira a resposta 3 aqui." required="required" name="answer3" />
        <label for="answer1">Resposta 3</label>

        <input type="text" id="answer4" placeholder="Insira a resposta 4 aqui." required="required" name="answer4" />
        <label for="answer1">Resposta 4</label>

        <input list="correct-answer">
        <datalist id="correct-answer">
        <option value="1"></option>
        <option value="2"></option>
        <option value="3"></option>
        <option value="4"></option>
        </datalist>
        </input>
        <label for="correct-answer">Qual é a resposta correta?</label>

        <input type="submit" class="submit-button" onClick = {() => {setQuestion(e)}} value="Enviar" />

        </form>

        </section>
    )
}