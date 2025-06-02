document.addEventListener('DOMContentLoaded', function() {
  const button = document.getElementById('button-iniciar-quiz');
  const container = document.getElementById('quiz-container');
  const listquiz = document.querySelectorAll('#quiz-container .quiz')
  const score = document.getElementById('quiz-score');

  let acertos = 0;
  let erros = 0;

  button.addEventListener('click', function() {
    button.style.display = "none";
    container.style.display = "flex";
    score.style.setProperty('visibility', 'visible');
  });
  
  listquiz.forEach(quiz => {
  const listp = quiz.querySelectorAll("p")
    var verdadeiro 
    listp.forEach(p => {
      if (p.getAttribute("resposta") == "verdadeiro"){
        verdadeiro = p
      }

      p.addEventListener("click", function(){
        if (p.getAttribute("resposta") == "falso"){
          p.style.border = "2px solid red"
          verdadeiro.style.border = "2px solid green"
          erros++;
        } else {
          p.style.border = "2px solid green"
          acertos++;
        }
        quiz.style.pointerEvents = "none"
        score.innerHTML = 'Você acertou '+acertos+' e errou '+erros+'.'
      })
    })
  })
});
