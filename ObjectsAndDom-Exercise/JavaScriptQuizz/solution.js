function solve() {
    let allSections = document.querySelectorAll('section');
    let allDivWithAnswerWrap = document.querySelectorAll('.answer-wrap');
    let correctAnswers = ['onclick', 'JSON.stringify()', 'A programming API for HTML and XML documents'];
    let countCorrectAnswers = 0;
    let indexCurrentSection = 0;

    for (const answerWrap of allDivWithAnswerWrap) {
        answerWrap.addEventListener('click', () => {
            if (correctAnswers.includes(answerWrap.innerText)) {
                countCorrectAnswers++;
            }
            allSections[indexCurrentSection].style.display = 'none';
            indexCurrentSection++;    
            indexCurrentSection === 3?   printResult(countCorrectAnswers) : allSections[indexCurrentSection].style.display = 'block';       
        }) 
    }

    function printResult(countCorrectAnswers) {
        document.querySelector("#results").style.display = 'block';
        let result = document.querySelector("#results > li > h1");
        if (countCorrectAnswers === 3) {
            result.innerHTML = 'You are recognized as top JavaScript fan!';
        } else {
            result.innerHTML = `You have ${countCorrectAnswers} right answers`;
        }
    }
}