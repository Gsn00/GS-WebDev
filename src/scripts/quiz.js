document.addEventListener('DOMContentLoaded', function() {
    const buttom = document.getElementById('button-iniciar-quiz');
    const container = document.getElementById('quiz-container');
    const listquiz = document.querySelectorAll('#quiz-container .quiz')

     buttom.addEventListener('click', function() {
        buttom.style.display = "none"
        container.style.display = "flex"
    });
    
    listquiz.forEach(quiz => {
    const listp = quiz.querySelectorAll("p")
        var verdadeiro 
        listp.forEach(p => {
            if (p.getAttribute("resposta")== "verdadeiro"){
                verdadeiro = p
            }

            p.addEventListener("click", function(){
              if (p.getAttribute("resposta") == "falso"){
                p.style.border = "1px solid red"
                verdadeiro.style.border = "1px solid green"
              }
               else{
                  p.style.border = "1px solid green"
              }
              quiz.style.pointerEvents = "none"
        })
      })
    })
});
