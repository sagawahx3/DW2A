import { Question } from "./Question";

  export class Bank{
   id = 0
   question = []

      addQuestion(text, answer1, answer2, answer3, answer4) {
        let quest = new Question(this.id, text, answer1, answer2, answer3, answer4);
        this.question[this.id] = quest
        this.id++
      }

      getQuestion(){
        let r = Math.floor((Math.random() * this.id));
        return this.question[r]
      }


      addDefaultQuestions(){
       this.addQuestion(
          "test1",
          "a1", 
          "a2", 
          "a3", 
          "a4",
          1)

          this.addQuestion(
            "test2",
            "a1", 
            "a2", 
            "a3", 
            "a4",
            2);

            this.addQuestion(
              "test3",
              "a1", 
              "a2", 
              "a3", 
              "a4",
              3);

         return;
      }
    }


 