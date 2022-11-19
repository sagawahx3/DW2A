import { useState, useEffect } from "react"
import BankInstance from "./Bank"
import { Question } from "./Question"

export function QuestionRender(props){

    BankInstance.addDefaultQuestions()

    const [answerstate, setAnswer] = useState(0)

    const quest = BankInstance.getQuestion()

    function checkAnswer(answer){

        console.log(answer)
 
        let x = quest.checkAnswer(answer)

        if(x == 1){
            setAnswer(1)
           return
           }
           else if(x == 2){
            setAnswer(2)
           return
            }
 
     }

    return(
        <section className = "question">
        <h1>Questão {quest.id}</h1>
        <p>{quest.text}</p>
            <button type="button" onClick = {() => {checkAnswer(1)}}>{quest.answer1}</button><br></br>
            <button type="button" onClick = {() => {checkAnswer(2)}}>{quest.answer2}</button><br></br>
            <button type="button" onClick = {() => {checkAnswer(3)}}>{quest.answer3}</button><br></br>
            <button type="button" onClick = {() => {checkAnswer(4)}}>{quest.answer4}</button><br></br>
            {answerstate == 1 && <p>Resposta correta!</p>}
            {answerstate == 2 && <p>Resposta incorreta!</p>}
        </section>
    )
}