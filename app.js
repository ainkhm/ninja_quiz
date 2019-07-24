const correctAnswers = ['B','B','B','B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');

form.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;

    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value]

    userAnswers.forEach((answer, index) => {
        if(answer === correctAnswers[index]) {
            //alert('success!');
            score += 25;  
        }
    });
    //console.log(score);
    result.classList.remove('d-none');
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
    let outputResult = 0;
    const timer = setInterval(() => {
        result.querySelector('span').textContent = `${outputResult}%`;
        if(outputResult === score){
            clearInterval(timer);
        }
        else {
            outputResult++;
        }
    }, 75);
   
})