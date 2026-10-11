document.addEventListener('DOMContentLoaded',()=>{

    const nextBtn=document.getElementById("next-btn")
    const startBtn=document.getElementById("start-btn")
    const restatBtn=document.getElementById("restart-btn")
    const questionContainer=document.getElementById("question-container")
    const questionText=document.getElementById("question-text")
    const choicesList=document.getElementById("choices-list")
    const resultContainer=document.getElementById("result-container")
    const ScoreDisplay=document.getElementById("score")
    
    const questions = [
    {
      question: "What is the capital of France?",
      choices: ["Paris", "London", "Berlin", "Madrid"],
      answer: "Paris",
    },
    {
      question: "Which planet is known as the Red Planet?",
      choices: ["Mars", "Venus", "Jupiter", "Saturn"],
      answer: "Mars",
    },
    {
      question: "Who wrote 'Hamlet'?",
      choices: [
        "Charles Dickens",
        "Jane Austen",
        "William Shakespeare",
        "Mark Twain",
      ],
      answer: "William Shakespeare",
    },
  ];

    let currentQuestionIndex=0
    let Score=0

    startBtn.addEventListener('click',startQuiz)
    nextBtn.addEventListener('click',()=>{
        currentQuestionIndex++
        if(currentQuestionIndex<questions.length){
            showQuestion()
        }else{
            showResult()
        }
    })

    restatBtn.addEventListener('click',()=>{
        Score=0
        currentQuestionIndex=0
        resultContainer.classList.add('hidden')
        startQuiz()


    })

    function startQuiz() {
        startBtn.classList.add('hidden')
        resultContainer.classList.add('hidden')
        questionContainer.classList.remove('hidden')
        showQuestion()
        
    }

    function showQuestion(){
        nextBtn.classList.add('hidden')
        questionText.textContent=questions[currentQuestionIndex].question
        choicesList.innerHTML="" //clear previous choices
        questions[currentQuestionIndex].choices.forEach(choice=>{
            const li =document.createElement('li')
            li.textContent=choice
            li.addEventListener('click',()=>selectAnswer(choice))
            choicesList.appendChild(li)
        })
    }

    function selectAnswer(choice){
          if(questions[currentQuestionIndex].answer===choice){
            Score++
          }
          nextBtn.classList.remove('hidden')
    }

    function showResult(){
        questionContainer.classList.add('hidden')
        resultContainer.classList.remove('hidden')
        ScoreDisplay.textContent=`${Score} out of ${questions.length}`

    }





     
})