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
      marks:5
    },
    {
      question: "Which planet is known as the Red Planet?",
      choices: ["Mars", "Venus", "Jupiter", "Saturn"],
      answer: "Mars",
      marks:10
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
      marks:15
    },
  ];

    let currentQuestionIndex=0
    let Score=0
    let selectedAnswer=null

    startBtn.addEventListener('click',startQuiz)

    nextBtn.addEventListener('click',()=>{
        if(selectedAnswer===questions[currentQuestionIndex].answer){
            Score+=questions[currentQuestionIndex].marks
        }
        currentQuestionIndex++
        if(currentQuestionIndex<questions.length){
            showQuestion()
        }else{
            totalMarks()
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
        selectedAnswer=null
        questionText.textContent=questions[currentQuestionIndex].question
        choicesList.innerHTML="" //clear previous choices
        questions[currentQuestionIndex].choices.forEach(choice=>{
            const li =document.createElement('li')
            li.textContent=choice
            li.addEventListener('click',()=>selectAnswer(choice,li))
            choicesList.appendChild(li)
        })
    }

    function selectAnswer(choice,selectedChoice){
          selectedAnswer=choice
          choicesList.querySelectorAll('li').forEach(option=>option.classList.remove('selected'))
          selectedChoice.classList.add('selected')
          nextBtn.classList.remove('hidden')
    }

    const marksSum=questions.reduce((sum,question)=>sum+question.marks,0)
    function totalMarks(){
        showResult()
    }

    function showResult(){
        questionContainer.classList.add('hidden')
        resultContainer.classList.remove('hidden')
        ScoreDisplay.textContent=`${Score} out of ${marksSum}`

    }





     
})
