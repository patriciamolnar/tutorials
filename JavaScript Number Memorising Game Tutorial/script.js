document.addEventListener('DOMContentLoaded', () => {
    const numberField = document.getElementById('numbers'); 
    const inputField = document.querySelector('input'); 
    const submitBtn = document.getElementById('submit'); 
    const feedback = document.getElementById('feedback'); 
    const nextBtn = document.getElementById('next');
    const level = document.getElementById('level'); 
    const game = document.getElementById('game');
    const form = document.querySelector('form'); 
    const end = document.getElementById('end');
    const total = document.getElementById('total'); 
    let testNumber; 
    let minMax;
    let numOfAnswered = 0; 
    let numOfCorrect = 0; 

    //select difficulty
    const generateGame = (minMax) => {
        toggleVisibility([level, game]); 
        assignNumber(minMax);
    }

    const difficulty = {
        easy: [1000, 9999], 
        medium: [100000, 999999], 
        hard: [10000000, 99999999]
    }

    const diffBtns = document.querySelectorAll('.difficulty'); 
    diffBtns.forEach(btn => btn.addEventListener('click', e => {
        const value = e.target.textContent.toLowerCase(); 
        minMax = difficulty[value]; 
        generateGame(minMax);   
        end.classList.remove('hide'); 
        total.innerText = `Total: ${numOfCorrect}/${numOfAnswered}`; 
        inputField.focus();
    }));


    //generating and appending number
    const generateNumber = (minMax) => {
        const min = minMax[0];
        const max = minMax[1];
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const assignNumber = (minMax) => {
        testNumber = generateNumber(minMax); 
        numberField.innerText = testNumber; 
        numberField.classList.remove('hide'); 
        setTimeout(() => {
            numberField.classList.add('hide'); 
        }, 2000);
    }

    //checking result 
    const checkResult = () => {
        numOfAnswered += 1; 
        const inputValue = inputField.value; 
        if(parseInt(inputValue) === testNumber) {
            numOfCorrect += 1; 
            return true;
        } else {
            return false; 
        }
    }

    const giveFeedback = result => {
        if(result) {
            feedback.innerText = 'Correct!';
            feedback.classList.add('correct');
            feedback.classList.remove('wrong');
        } else {
            feedback.innerText = `Incorrect! The answer is ${testNumber}`;
            feedback.classList.remove('correct');
            feedback.classList.add('wrong');
        }


    }

    const toggleVisibility = eles => {
        eles.forEach(ele => ele.classList.toggle('hide'))
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault(); 

        // avoid submitting form twice for same question
        if(!submitBtn.classList.contains('hide')) {
            const result = checkResult(); 
            giveFeedback(result); 
            total.innerText = `${numOfCorrect}/${numOfAnswered}`; 

            toggleVisibility([submitBtn, nextBtn]); 
            nextBtn.focus(); 
        } 
    });

    //get next number
    nextBtn.addEventListener('click', () => {
        feedback.innerText = ''; 
        inputField.value = '';
        numberField.classList.remove('hide'); 
        assignNumber(minMax); 
        toggleVisibility([submitBtn, nextBtn]); 
        inputField.focus(); 
    }); 


    end.addEventListener('click', () => {
        minMax = undefined; 
        testnumber = undefined; 
        numOfAnswered = 0; 
        numOfCorrect = 0; 
        total.innerText = '';
        feedback.innerText = ''; 
        inputField.value = '';
        end.classList.add('hide'); 
        nextBtn.classList.add('hide'); 
        submitBtn.classList.remove('hide');
        toggleVisibility([level, game]); 
    });
}); 
 